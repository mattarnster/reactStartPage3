import React, { PureComponent } from 'react';

import Nav from './Nav'
import SitesListing from './SitesListing'
import TodayBar from './TodayBar'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Nav />
        <TodayBar />
        <div className="container">
          <SitesListing />
        </div>
      </div>
    );
  }
}

export default App;
