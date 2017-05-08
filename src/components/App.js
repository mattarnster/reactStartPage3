import React, { PureComponent } from 'react';

import Nav from './Nav'
import SitesListing from './SitesListing'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <SitesListing />
        </div>
      </div>
    );
  }
}

export default App;
