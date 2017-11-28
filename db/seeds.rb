# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: 'PlayThis', password: 'playthis', email: 'playthis@playthis.com')
img = File.open('app/assets/images/logo-green.png')
u1.avatar = img
u1.save!
User.create(username: 'kona', password: 'password', email: 'test@test.com', avatar: "https://s3-us-west-1.amazonaws.com/playthismusic/images/kona.png")
User.create(username: 'coco', password: 'password', email: 'test2@test.com', avatar: "https://s3-us-west-1.amazonaws.com/playthismusic/images/coco.jpg")
User.create(username: 'dino', password: 'password', email: 'test3@test.com', avatar: "https://s3-us-west-1.amazonaws.com/playthismusic/images/dino.jpg")
User.create(username: 'bobble', password: 'password', email: 'test5@test.com', avatar: "https://s3-us-west-1.amazonaws.com/playthismusic/images/bobble.jpg")
User.create(username: 'fluffy', password: 'password', email: 'test6@test.com', avatar: "https://s3-us-west-1.amazonaws.com/playthismusic/images/fluffy.jpg")
User.create(username: 'chip', password: 'password', email: 'test7@test.com', avatar: "https://s3-us-west-1.amazonaws.com/playthismusic/images/chip.png")

Artist.create(name: 'Samantha Harmonies', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist.jpeg')
Artist.create(name: 'Katie TrebelMaker', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist2.jpeg')
Artist.create(name: 'Mark Twang', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist3.jpeg')
Artist.create(name: 'The Rejects', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist4.jpeg')
Artist.create(name: 'Jordan Ralls', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist5.jpeg')
Artist.create(name: 'Ethan Swell', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist6.jpeg')
Artist.create(name: 'The MakeUpArtist', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist7.jpeg')
Artist.create(name: 'Leslie', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist8.jpeg')
Artist.create(name: 'Liam Guthrop', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/artist9.jpeg')
Artist.create(name: 'Never Age', img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/band.jpeg')
Album.create(title: 'Fly Away', artist_id: 1, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-bird.png')
Album.create(title: 'Sky High', artist_id: 2, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-bird.png')
Album.create(title: 'Coming Home', artist_id: 3, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-drive.jpeg')
Album.create(title: 'Whatver', artist_id: 4, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-drive.jpeg')
Album.create(title: 'Broken', artist_id: 5, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-lovehope.png')
Album.create(title: 'Rise Up', artist_id: 6, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-lovehope.png')
Album.create(title: 'Kickin', artist_id: 7, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-walk.jpeg')
Album.create(title: 'CrossRoads', artist_id: 8, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-walk.jpeg')
Album.create(title: 'Jealous', artist_id: 9, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-waves.png')
Album.create(title: 'craSh', artist_id: 10, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/album-waves.png')
Album.create(title: 'Warm', artist_id: 1, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/sunset.jpeg')
Album.create(title: 'In Trebel', artist_id: 3, img_url: 'https://s3-us-west-1.amazonaws.com/playthismusic/music-images/sunset.jpeg')

Playlist.create(title: 'Coffee Shop', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-coffeeshop.jpeg")
Playlist.create(title: 'Cozy Up', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-cozy.jpeg")
Playlist.create(title: 'Dreamy', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-dreamy.jpeg")
Playlist.create(title: 'Have Fun', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-fun.jpeg")
Playlist.create(title: 'Out on the Town', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-outonthetown.jpeg")
Playlist.create(title: 'Grooves', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-grooves.jpeg")
Playlist.create(title: 'Holiday Music', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-holiday.jpeg")
Playlist.create(title: 'Jazz', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-jazz.jpeg")
Playlist.create(title: 'Keys', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-keys.jpeg")
Playlist.create(title: 'Live Music', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-live.jpeg")
Playlist.create(title: 'Night Out', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-nightout.jpeg")
Playlist.create(title: 'Road Trip', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-roadtrip.jpeg")
Playlist.create(title: 'Relax', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-relax.jpeg")
Playlist.create(title: 'Rock n Roll', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-rock.jpeg")
Playlist.create(title: 'Study', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-study.jpeg")
Playlist.create(title: 'Work Out', author_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/p-running.png")
Playlist.create(title: 'my jams', author_id: 2)
Playlist.create(title: 'hiphoppy', author_id: 3)
Playlist.create(title: 'sad day', author_id: 4)
Playlist.create(title: 'in love', author_id: 5)
Playlist.create(title: 'squirrels', author_id: 6)
Playlist.create(title: 'treats', author_id: 7)
Playlist.create(title: 'dig it', author_id: 8)
Playlist.create(title: 'chase', author_id: 2)
Playlist.create(title: 'run', author_id: 3)
Playlist.create(title: 'funky funk', author_id: 4)
Playlist.create(title: 'crazy', author_id: 5)
Playlist.create(title: 'zoomies', author_id: 6)

Song.create(title: 'Legend For Everything', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'Tired Of Style', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'Search For His Inner Fire', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'Copy Her Strength', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'Fame Dreams', album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'Fat Chance', album_id: 1, artist_id: 1, length: 200)
Song.create(title: "Honey, We're Crazy In Love", album_id: 1, artist_id: 1, length: 200)
Song.create(title: "You're My One And Only", album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'He Knows He Can Do This', album_id: 1, artist_id: 1, length: 200)
Song.create(title: "She's On My Mind", album_id: 1, artist_id: 1, length: 200)
Song.create(title: 'Call Of Love', album_id: 2, artist_id: 2, length: 200)
Song.create(title: 'Minute Of A Woman', album_id: 2, artist_id: 2, length: 200)
Song.create(title: "Don't Need Her Mind", album_id: 2, artist_id: 2, length: 200)
Song.create(title: 'Compete For His Music', album_id: 2, artist_id: 2, length: 200)
Song.create(title: 'Male Secrets', album_id: 2, artist_id: 2, length: 200)
Song.create(title: 'No Memories', album_id: 2, artist_id: 2, length: 200)
Song.create(title: 'Baby, You And I Forever', album_id: 2, artist_id: 2, length: 200)
Song.create(title: "Darling, You're My Number One", album_id: 2, artist_id: 2, length: 200)
Song.create(title: 'I Heard He Likes You', album_id: 2, artist_id: 2, length: 200)
Song.create(title: 'I Know He Loves You', album_id: 2, artist_id: 2, length: 200)
Song.create(title: 'Theme Of The Edge', album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'A Song Of Everything', album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'Space Of Your World', album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'Bass Of Your Machine', album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'Lazy Music', album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'Free Love', album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'Bring It One More Time', album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'Hold Me', album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'He Knows He Drops That Bass', album_id: 3, artist_id: 3, length: 200)
Song.create(title: "I Said He's A Troublemaker", album_id: 3, artist_id: 3, length: 200)
Song.create(title: 'Breath Of Dreams', album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'Fun Of A Cheater', album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'Whispers Of Your Ignorance', album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'Thinking Of Your Joy', album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'Broken Song', album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'Morning Whispers', album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'I Think I Love You', album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'Because Of A Lover', album_id: 4, artist_id: 4, length: 200)
Song.create(title: "Honey, I Don't Know You At All", album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'Gentle Chance', album_id: 4, artist_id: 4, length: 200)
Song.create(title: 'Depths Of Something Broken', album_id: 5, artist_id: 5, length: 200)
Song.create(title: 'Songs Of My Heart', album_id: 5, artist_id: 5, length: 200)
Song.create(title: 'Forget About My Fire', album_id: 5, artist_id: 5, length: 200)
Song.create(title: 'Dreams Of My Best Friend', album_id: 5, artist_id: 5, length: 200)
Song.create(title: 'Sleepless Life', album_id: 5, artist_id: 5, length: 200)
Song.create(title: 'Broken Feeling', album_id: 5, artist_id: 5, length: 200)
Song.create(title: 'Let Go, Come With Me', album_id: 5, artist_id: 5, length: 200)
Song.create(title: "Darling, I'm Alone", album_id: 5, artist_id: 5, length: 200)
Song.create(title: 'I Hope I Am Troubled', album_id: 5, artist_id: 5, length: 200)
Song.create(title: "I'm All", album_id: 5, artist_id: 5, length: 200)
Song.create(title: 'South Of A Rainy Day', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'Walls', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'Kiss Your Home', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'Without Her Music', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'Wanted Trails', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'Dirt River', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'Honey, Ride With Me', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'Do You Remember?', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'I Like To Be Alone', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'He Heard She Misses You', album_id: 6, artist_id: 6, length: 200)
Song.create(title: 'Respect', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Triumph', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Riches', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Rhythm', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Control', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Game', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Hold', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Addicted', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Streets', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Bad', album_id: 7, artist_id: 7, length: 200)
Song.create(title: 'Full Moon', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Blood', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Moment', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Chains', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Burning Vibes', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Joy', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Honey', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Crazy Magic', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'In Love', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Hurt', album_id: 8, artist_id: 8, length: 200)
Song.create(title: 'Paradise Of Superstitions', album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'Breath Of My Time', album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'Wicked Madness', album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'Looking For Something', album_id: 9, artist_id: 9, length: 200)
Song.create(title: "Let's Go", album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'Dreamer', album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'Wolf', album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'My Angel', album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'Walk On The Wild Side', album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'Sensations', album_id: 9, artist_id: 9, length: 200)
Song.create(title: 'Thrill Of A Woman', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Seconds', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Chains', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'My Promises', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Black Heart', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Dusty Beauty', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Rumble', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Beast', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Starlight', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Late Night Chances', album_id: 10, artist_id: 10, length: 200)
Song.create(title: 'Picture', album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Forever', album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Lose His Power', album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Tickle Me', album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Beautiful Promises', album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Baby', album_id: 11, artist_id: 1, length: 200)
Song.create(title: "Can't Hold Us", album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Trouble', album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Remember', album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Dance', album_id: 11, artist_id: 1, length: 200)
Song.create(title: 'Man Of Falling Stars', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Dreams Of My Moods', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Walking', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Choices', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Swing', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Beats', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Twisted', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Dancer', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Air', album_id: 12, artist_id: 3, length: 200)
Song.create(title: 'Luck', album_id: 12, artist_id: 3, length: 200)


rng = Random.new
1000.times do
  playlist_id = rng.rand(28) + 1
  song_id = rng.rand(120) + 1
  PlaylistSong.create(playlist_id: playlist_id, song_id: song_id)
end
