import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

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

Sentry.init({
  dsn: "https://8edaf48f47014096a4fcb7eda14a87c5@o526497.ingest.sentry.io/5641886",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});


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