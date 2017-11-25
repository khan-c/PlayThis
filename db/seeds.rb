# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'test', password: 'password', email: 'test@test.com')
User.create(username: 'test2', password: 'password', email: 'test2@test.com')

Artist.create(name: 'The Rejects', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/images/default_profile.png')
Album.create(title: 'Whatver', artist_id: 1, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/sunset.jpeg')

Playlist.create(title: 'playlist1', author_id: 1)
Playlist.create(title: 'playlist2', author_id: 1)
Playlist.create(title: 'playlist3', author_id: 1)
Playlist.create(title: 'playlist4', author_id: 2)
Playlist.create(title: 'playlist5', author_id: 2)
Playlist.create(title: 'playlist6', author_id: 2)
Playlist.create(title: 'playlist7', author_id: 2)
Playlist.create(title: 'playlist8', author_id: 2)
Playlist.create(title: 'playlist9', author_id: 2)
Playlist.create(title: 'playlist10', author_id: 2)
Playlist.create(title: 'playlist11', author_id: 2)
Playlist.create(title: 'playlist12', author_id: 2)
Playlist.create(title: 'playlist13', author_id: 2)
Playlist.create(title: 'playlist14', author_id: 2)

Song.create(title: 'song1', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song2', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song3', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song4', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song5', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song6', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song7', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song8', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song9', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song10', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song11', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song12', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song13', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song14', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song15', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song16', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song17', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song18', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'song19', album_id: 1, artist_id: 1, length: 200)

PlaylistSong.create(playlist_id: 1, song_id: 1)
PlaylistSong.create(playlist_id: 1, song_id: 2)
PlaylistSong.create(playlist_id: 1, song_id: 3)
PlaylistSong.create(playlist_id: 1, song_id: 4)
PlaylistSong.create(playlist_id: 1, song_id: 5)
PlaylistSong.create(playlist_id: 1, song_id: 6)
PlaylistSong.create(playlist_id: 1, song_id: 7)
PlaylistSong.create(playlist_id: 1, song_id: 8)
PlaylistSong.create(playlist_id: 1, song_id: 9)
PlaylistSong.create(playlist_id: 1, song_id: 10)
PlaylistSong.create(playlist_id: 1, song_id: 11)
PlaylistSong.create(playlist_id: 1, song_id: 12)
PlaylistSong.create(playlist_id: 1, song_id: 13)
PlaylistSong.create(playlist_id: 1, song_id: 14)
PlaylistSong.create(playlist_id: 1, song_id: 15)
PlaylistSong.create(playlist_id: 1, song_id: 16)
PlaylistSong.create(playlist_id: 1, song_id: 17)
PlaylistSong.create(playlist_id: 1, song_id: 18)
PlaylistSong.create(playlist_id: 1, song_id: 19)
PlaylistSong.create(playlist_id: 2, song_id: 1)
PlaylistSong.create(playlist_id: 2, song_id: 2)
PlaylistSong.create(playlist_id: 3, song_id: 3)
PlaylistSong.create(playlist_id: 3, song_id: 4)
