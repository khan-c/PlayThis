export const searchDatabase = query => (
  $.ajax({
    type: 'GET',
    url: 'api/searches',
    data: { search: { query } }
  })
);
