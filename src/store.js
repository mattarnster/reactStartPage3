// store.js
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

import localStorageHelper from "./helpers/localStorageHelper";

const localStorage = new localStorageHelper();

const ghAuthToken = localStorage.getAuthToken();
const ghBackupGistId = localStorage.getBackupGistId();
const ghLocalProfile = localStorage.getProfile();
const contributors = localStorage.getContributors();
const background = localStorage.getBackground();

if (localStorage.getSites() === null) {
  window.localStorage.setItem("sites", []);
}

if (localStorage.getColor() === null) {
  window.localStorage.setItem("color", "#695DA4");
}

if (localStorage.getTextColor() === null) {
  window.localStorage.setItem("text_color", "white-text");
}

if (localStorage.getContributors() === null) {
  window.localStorage.setItem("gh_contributors", JSON.parse("[]"));
}

// Default state
const defaultState = {
  sites: localStorage.getSites() !== null ? localStorage.getSites() : [],
  github: {
    ghAuthStatus: ghAuthToken ? true : false,
    ghToken: ghAuthToken,
    ghProfile: ghLocalProfile,
    gists: [],
    ghBackupGistId,
    contributors,
  },
  imageCredit: "",
  color: localStorage.getColor(),
  textColor: localStorage.getTextColor(),
  background: background
};

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
