import React from 'react';

class ArtistItem extends React.Component {

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params !== newProps.match.params) {
      console.log("test");
      this.props.fetchArtist(newProps.match.params.artistId);
    }
  }

  render() {
    const { artist } = this.props;
    console.log(this.props);

    if (!artist) {
      return null;
    }

    return(
      <div className="artist-header">
        <div className="artist-image-container">
          <img
            className="artist-image"
            src={ artist.img_url } />
        </div>
        <h1 className="artist-title">{ artist.name }</h1>
      </div>
    );
  }
}

export default ArtistItem;
