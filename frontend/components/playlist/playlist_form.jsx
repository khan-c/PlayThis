import React from 'react';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.escFunc = this.escFunc.bind(this);
  }


  escFunc(e) {
    if (event.keyCode === 27) {
      document.removeEventListener("keydown", this.escFunc);
      console.log(this.props.history.goBack());
    }
  }

  componentDidMount() {
    console.log(this.props);
    document.addEventListener("keydown", this.escFunc, false);
  }

  render() {
    return(
      <div className="playlist-form-modal">
        <button>X</button>
      </div>
    );
  }
}

export default PlaylistForm;
