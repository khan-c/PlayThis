export const fetchUsers = () =>
  $.ajax({
    type: "GET",
    url: `api/users`
  });

export const updateUser = user =>
  $.ajax({
    type: "PATCH",
    url: `api/users/${user.id}`,
    data: { user }
  });
