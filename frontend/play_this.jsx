import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TESTING
import {
  fetchPlaylists,
  fetchPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist
} from './actions/playlist_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={ store } />, root);

  // TESTING
  window.fetchPlaylist = fetchPlaylist;
  window.fetchPlaylists = fetchPlaylists;
  window.createPlaylist = createPlaylist;
  window.updatePlaylist = updatePlaylist;
  window.deletePlaylist = deletePlaylist;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
});
