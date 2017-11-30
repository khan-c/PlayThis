export const currentUserPlaylists = (state) => (
  Object.values(state.entities.playlists).filter(playlist => (
    playlist.author_id === state.session.currentUser.id
  ))
);

export const usersPlaylists = (state, userId) => {
  const results = Object.values(state.entities.playlists).filter(playlist => (
    playlist.author_id === parseInt(userId)
  ));
  return results;
};
