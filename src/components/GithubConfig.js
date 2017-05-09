import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import queryString from 'query-string'

import Nav from './Nav'
import TodayBar from './TodayBar'

import { ghAuthStatusChange } from '../actions/actionCreators'
import { ghAuthorise } from '../actions/actionCreators'

class GithubConfig extends PureComponent {

  componentDidMount() {
     let query = queryString.parse(location.search)
     if ('code' in query) {
         console.log(query.code)
         this.props.dispatch(ghAuthStatusChange('pending'))
         this.props.dispatch(ghAuthorise(query.code))
     }
  }

  getButtonState() {
    if (this.props.github.ghAuthStatus === 'pending') {
      return <a className="waves-effect waves-light btn-large blue darken-3 disabled">Pending... Please wait.</a>
    } else if (this.props.github.ghAuthStatus === true) {
      return <div className="card-panel green darken-1 white-text center">Logged in with Github!</div>
    } else {
      return <a className="waves-effect waves-light btn-large blue darken-3" href="https://github.com/login/oauth/authorize?scope=gist&client_id=20c031bc4aae68587cc4">Log in with Github</a>
    }
  }

  render() {
    return (
      <div className="GithubConfig">
        <Nav />
        <TodayBar />
        <div className="container">
          <div className="s12 m12">
              <div className="card teal white-text">
                <div className="card-content">
                    <h5>Link your Github account to save your bookmarks.</h5>
                    <br />

                    { this.getButtonState() }
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
    }
}

export default connect(mapStateToProps)(GithubConfig);
