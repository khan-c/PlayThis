import React from 'react';

class Main extends React.Component {

  render() {
    return(
      <div className="main">
        <h1>Main Page</h1>
        <button
          className="button"
          onClick={ this.props.logout }>Log Out</button>
      </div>
    );
  }
}

export default Main;
