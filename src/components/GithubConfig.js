import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import queryString from 'query-string'
import GitHub from 'github-api'
import tinycolor from 'tinycolor2'

import Nav from './Nav'
import TodayBar from './TodayBar'
import GistListing from './Github/GistListing'
import GistOps from './Github/GistOps'

import {
  ghAuthStatusChange,
  ghAuthorise,
  ghUpdateBackupGistId,
  ghUserProfile
} from '../actions/actionCreators'

import { ghProfile } from '../api/ghProfile';

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
     ghProfile().then(req => {
       return req.data
     }).then(profile => {
       this.props.dispatch(ghUserProfile(profile))
     })
  }

  getButtonState() {
    console.info('state')
    console.log(this.props.github)
    if (this.props.github.ghAuthStatus === 'pending') {
      return <p className="waves-effect waves-light btn-large blue darken-3 disabled">Pending... Please wait.</p>
    } else if (!this.props.github.ghAuthStatus) {
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

  getComputedColor(withMargin) {
    var darkened = tinycolor(this.props.color)
    if (withMargin) {
      return {
        backgroundColor: darkened.darken(10),
        marginBottom: 0
      }
    }
    return {
      backgroundColor: darkened.darken(10)
    }
  }

  render() {
    return (
      <div className="GithubConfig">
        <Nav ghAuthStatus={ this.props.github.ghAuthStatus }/>
        <TodayBar />
        <div className="container">
          <div className="s12 m12">
            <div className="card white-text"
                style={ this.getComputedColor() }>
              <div className="card-content">
                  <span className="card-title">Link your GitHub account to save your bookmarks.</span>
                  <br />

                  { this.getButtonState() }

                  { this.props.github.ghToken ? <GistOps color={ this.props.color } backup={ this.backup } /> : null }

                  { this.props.github.ghToken ? <GistListing color={ this.props.color } /> : null }
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
        sites: state.sites,
        color: state.color
    }
}

export default connect(mapStateToProps)(GithubConfig);
