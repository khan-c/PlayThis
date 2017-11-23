# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'test', password: 'password', email: 'test@test.com')
User.create(username: 'test2', password: 'password', email: 'test2@test.com')

Playlist.create(title: 'playlist1', author_id: 1);
Playlist.create(title: 'playlist2', author_id: 1);
Playlist.create(title: 'playlist3', author_id: 1);
Playlist.create(title: 'playlist4', author_id: 2);

Song.create(title: 'song1', album_id: 1, artist_id: 1);
Song.create(title: 'song2', album_id: 1, artist_id: 1);
Song.create(title: 'song3', album_id: 1, artist_id: 1);
Song.create(title: 'song4', album_id: 1, artist_id: 1);

PlaylistSong.create(playlist_id: 1, song_id: 1);
PlaylistSong.create(playlist_id: 1, song_id: 2);
PlaylistSong.create(playlist_id: 1, song_id: 3);
PlaylistSong.create(playlist_id: 1, song_id: 4);
PlaylistSong.create(playlist_id: 2, song_id: 1);
PlaylistSong.create(playlist_id: 2, song_id: 2);
PlaylistSong.create(playlist_id: 3, song_id: 3);
PlaylistSong.create(playlist_id: 3, song_id: 4);
