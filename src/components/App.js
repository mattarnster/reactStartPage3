import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Nav from './Nav'
import SitesListing from './SitesListing'
import TodayBar from './TodayBar'
import ImageCredit from './ImageCredit'

class App extends PureComponent {

  componentDidMount() {
    if (this.props.background !== '' && this.props.background !== null) {
      document.body.style.backgroundImage = "url(" + this.props.background + ")"
    } else {
      document.body.style.backgroundImage = "url(/assets/unsplash.jpg)"
    }
  }

  render() {
    return (
      <div className="App">
        <Nav ghAuthStatus={ this.props.github.ghAuthStatus } />
        <TodayBar />
        <div className="container">
          <SitesListing />
        </div>
        { this.props.background === '' || this.props.background === null ? <ImageCredit /> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    github: state.github,
    color: state.color,
    background: state.background,
  }
}

export default connect(mapStateToProps)(App);
