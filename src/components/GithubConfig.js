import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import queryString from 'query-string'
import GitHub from 'github-api'

import Nav from './Nav'
import TodayBar from './TodayBar'
import GistListing from './Github/GistListing'
import GistOps from './Github/GistOps'

import localStorageHelper from '../helpers/localStorageHelper'

import { 
  ghAuthStatusChange,
  ghAuthorise,
  ghUpdateBackupGistId
} from '../actions/actionCreators'

class GithubConfig extends PureComponent {

  constructor() {
    super()

    this.backup = this.backup.bind(this)
  }

  componentDidMount() {
     let query = queryString.parse(window.location.search)
     if ('code' in query) {
         this.props.dispatch(ghAuthStatusChange('pending'))
         this.props.dispatch(ghAuthorise(query.code))
     }
  }

  getButtonState() {
    console.info('state')
    console.log(this.props.github)
    if (this.props.github.ghAuthStatus === 'pending') {
      return <a className="waves-effect waves-light btn-large blue darken-3 disabled">Pending... Please wait.</a>
    } else if (this.props.github.ghAuthStatus === true) {
      return <div className="card-panel green darken-1 white-text center">Logged in with Github!</div>
    } else {
      return <a className="waves-effect waves-light btn-large blue" href="https://github.com/login/oauth/authorize?scope=gist&client_id=20c031bc4aae68587cc4">Log in with Github</a>
    }
  }

  backup() {
    let ghClient = new GitHub({
        token: this.props.github.ghToken
    })
    
    var gist = ghClient.getGist()

    if (!this.props.github.ghBackupGistId) {
      gist.create({
        public: false,
        description: 'reactStartPage3 Backup',
        files: {
            "sites.json": {
              content: JSON.stringify(this.props.sites)
            }
          }
        })
      .then(data => {
        return gist.read()
      })
      .then(gist => {
        console.log(gist.data)
        this.props.dispatch(ghUpdateBackupGistId(gist.data.id))
      })
    } else { 
      console.log('Backup gist id not found in storage')
      let gist = ghClient.getGist(this.props.github.ghBackupGistId)
      gist.read()
      .then(data => {
        console.info('Reading gist from GH')
        gist.update({
          files: {
            'sites.json': {
              content: JSON.stringify(this.props.sites)
            }
          }
        })
        .then (data => {
          return gist.read()
        })
        .then (gist => {
          console.log('gist update')
          console.log(gist.data)
        })
      })
    }
  }

  render() {
    return (
      <div className="GithubConfig">
        <Nav ghAuthStatus={ this.props.github.ghAuthStatus }/>
        <TodayBar />
        <div className="container">
          <div className="s12 m12">
            <div className="card cyan darken-1 white-text"
                style={{ 
                  marginBottom: 0
                }}>
              <div className="card-content">
                  <span className="card-title">Link your Github account to save your bookmarks.</span>
                  <br />

                  { this.getButtonState() }

                  { this.props.github.ghToken ? <GistOps backup={ this.backup } /> : null }

                  { this.props.github.ghToken ? <GistListing /> : null }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        github: state.github,
        sites: state.sites
    }
}

export default connect(mapStateToProps)(GithubConfig);
