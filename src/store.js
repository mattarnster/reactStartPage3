// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Default state
const defaultState = {
  sites: [{"name":"Hacker News","link":"https://news.ycombinator.com"},{"name":"Facebook","link":"https://facebook.com"},{"name":"Twitter","link":"https://twitter.com"},{"name":"Gmail/Inbox","link":"https://inbox.google.com"},{"name":"BetaArchive","link":"http://betaarchive.com"},{"name":"GitLab","link":"https://gitlab.com"},{"name":"Google Music","link":"https://music.google.com"},{"name":"Last.fm","link":"http://last.fm/user/mattarnster"},{"name":"YouTube","link":"https://www.youtube.com"},{"name":"Pantry","link":"https://pantry.fxdo.co.uk"},{"name":"JIRA","link":"http://jira.m-w.co.uk"},{"name":"[VPN] Interoute TeamCity","link":"http://teamcity.interoute.com"},{"name":"Google Music","link":"https://music.google.com"},{"name":"Basecamp","link":"https://basecamp.com"},{"name":"Interoute.com","link":"http://www.interoute.com"},{"name":"SecretServer","link":"https://ss-1.porteighty.hosting"},{"name":"Cloudstore","link":"https://cloudstore.interoute.com"},{"name":"GitHub","link":"https://www.github.com"},{"name":"Reddit","link":"https://reddit.com"}]
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;