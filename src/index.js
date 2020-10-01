import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'

import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './components/App';
import AddRemovePage from './components/AddRemove/AddRemovePage'
import SettingsPage from './components/Settings/SettingsPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/manage-sites" exact component={AddRemovePage} />
        <Route path="/link-github" exact component={SettingsPage} />
        <Route path="/gh-callback" exact component={SettingsPage} />
        <Route path="/settings" exact component={SettingsPage} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker()