import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      cPassword: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickDemo = this.clickDemo.bind(this);
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  header() {
    let header;
    if (this.props.formType === 'signup') {
      header = <h1>Sign Up</h1>;
    } else {
      header = <h1>Log In</h1>;
    }
    return header;
  }

  errors() {
    return this.props.errors.map( err => (
      <li className="error" key={ err }>{ err }</li>
    ));
  }

  loggedIn() {
    let redirect = '';
    if (this.props.loggedIn) {
      redirect = <Redirect to="/browse" />;
    }
    return redirect;
  }

  email() {
    let form = '';
    if (this.props.formType === 'signup') {
      form =
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={ this.handleChange('email') }
            value={ this.state.email }
            />
        </div>;
    }
    return form;
  }

  passwordRepeat() {
    let password = '';
    if (this.props.formType === 'signup') {
      password =
      <div className="form-item">
        <label htmlFor="cPassword">Confirm Password</label>
        <input
          id="cPassword"
          type="password"
          onChange={ this.handleChange('cPassword') }
          value={ this.state.cPassword }
        />
      </div>;
    }
    return password;
  }

  demoButton() {
    if (this.props.formType === 'login') {
      return <button
        className="button demo"
        onClick={ this.clickDemo }>
          Demo This!
      </button>;
    }
    return '';
  }

  clickDemo(e) {
    e.preventDefault();
    const user = { username: "test", password: "password" };
    this.props.processForm(user);
  }

  render() {
    return(
      <div className="modal">
        { this.loggedIn() }
        <Link className="exit" to="/">X</Link>
        { this.header() }
        <form
          className="session-form"
          onSubmit={ this.handleSubmit }>
          { this.errors() }
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={ this.handleChange('username') }
            value={ this.state.username }
          />
          { this.email() }
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={ this.handleChange('password') }
            value={ this.state.password }
          />
          { this.passwordRepeat() }
          <input
            className="button signup"
            type="submit"
            value={ this.props.formType }
          />
          { this.demoButton() }
        </form>
      </div>
    );
  }
}

export default SessionForm;
