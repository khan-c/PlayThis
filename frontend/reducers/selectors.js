export const currentUserPlaylists = (state) => (
  Object.values(state.entities.playlists).filter(playlist => (
    playlist.author_id === state.session.currentUser.id
  ))
);
