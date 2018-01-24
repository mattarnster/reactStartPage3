import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Nav from './Nav'
import SitesListing from './SitesListing'
import TodayBar from './TodayBar'
import ImageCredit from './ImageCredit'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Nav ghAuthStatus={ this.props.github.ghAuthStatus } />
        <TodayBar />
        <div className="container">
          <SitesListing />
        </div>
        <ImageCredit />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    github: state.github
  }
}

export default connect(mapStateToProps)(App);
