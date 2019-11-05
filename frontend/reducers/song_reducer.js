import merge from "lodash/merge";
import { RECEIVE_SONGS, RECEIVE_SONG } from "../actions/song_actions";

const defaultSongs = {
  "6": {
    id: 6,
    title: "Fat Chance",
    length: 200,
    song_url:
      "https://s3-us-west-1.amazonaws.com/playthismusic/music/Catmosphere+-+Candy-Coloured+Sky.mp3",
    artist: {
      id: 1,
      name: "Samantha Harmonies"
    },
    album: {
      id: 1,
      title: "Fly Away"
    }
  },
  "8": {
    id: 8,
    title: "You're My One And Only",
    length: 200,
    song_url:
      "https://s3-us-west-1.amazonaws.com/playthismusic/music/DURDEN_-_Paper_Planes_-_Durden_ft._Airtone.mp3",
    artist: {
      id: 1,
      name: "Samantha Harmonies"
    },
    album: {
      id: 1,
      title: "Fly Away"
    }
  },
  "10": {
    id: 10,
    title: "She's On My Mind",
    length: 200,
    song_url:
      "https://s3-us-west-1.amazonaws.com/playthismusic/music/JeffSpeed68_-_Falling.mp3",
    artist: {
      id: 1,
      name: "Samantha Harmonies"
    },
    album: {
      id: 1,
      title: "Fly Away"
    }
  }
};

const songReducer = (oldState = defaultSongs, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SONGS:
      return merge({}, oldState, action.songs);
    case RECEIVE_SONG:
      newState = merge({}, oldState);
      newState[action.song.id] = action.song;
      return newState;
    default:
      return oldState;
  }
};

export default songReducer;
