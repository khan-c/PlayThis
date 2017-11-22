import React from 'react';

class Main extends React.Component {

  render() {
    return(
      <div className="main">
        <h1>Main Page Placeholder text</h1>
        <h2>Welcome, { this.props.user.username }</h2>
        <button
          className="button"
          onClick={ this.props.logout }>Log Out</button>
      </div>
    );
  }
}

export default Main;
