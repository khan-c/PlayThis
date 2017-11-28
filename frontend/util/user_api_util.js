export const fetchUser = userId => (
  $.ajax({
    type: 'GET',
    url: `api/users/${userId}`
  })
);
