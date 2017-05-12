import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'

import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './components/App';
import GithubConfig from './components/GithubConfig'

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/link-github" exact component={GithubConfig} />
        <Route path="/gh-callback" exact component={GithubConfig} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
