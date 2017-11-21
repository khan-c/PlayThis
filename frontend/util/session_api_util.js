export const signup = formUser => (
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: { user: formUser }
  })
);

export const login = formUser => (
  $.ajax({
    type: 'POST',
    url: 'api/session',
    data: { user: formUser }
  })
);

export const logout = () => (
  $.ajax({
    type: 'DELETE',
    url: 'api/session'
  })
);
