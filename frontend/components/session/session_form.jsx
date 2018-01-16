import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import IoClose from 'react-icons/lib/io/ios-close-empty';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.demoUsers = ['kona', 'coco', 'bobble', 'chip', 'dino', 'fluffy'];
    this.demo = {
      username: this.demoUsers[Math.floor(Math.random() * 6)].split(''),
      password: 'password'.split('')
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickDemo = this.clickDemo.bind(this);

    this.modalClick = this.modalClick.bind(this);
    this.escFunc = this.escFunc.bind(this);
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
            className="input"
            id="email"
            type="text"
            onChange={ this.handleChange('email') }
            value={ this.state.email }
            />
        </div>;
    }
    return form;
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
    this.animateUserName();
  }

  animateUserName() {
    window.setTimeout(() => {
      let username = this.state.username + this.demo.username.shift();
      this.setState({ username });

      if (this.demo.username.length > 0) {
        this.animateUserName();
      } else {
        this.animatePassword();
      }
    }, 100);
  }

  animatePassword() {
    window.setTimeout(() => {
      let password = this.state.password + this.demo.password.shift();
      this.setState({ password });

      if (this.demo.password.length > 0) {
        this.animatePassword();
      } else {
        const user = this.state;
        window.setTimeout(() => this.props.processForm(user), 500);
      }
    }, 100);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  modalClick(e) {
    this.props.history.replace('/');
    this.props.clearErrors();
  }

  escFunc(e) {
    if (event.keyCode === 27) {
      this.props.history.replace('/');
      this.props.clearErrors();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunc, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunc);
  }

  render() {
    return(
      <div className="user-auth">
        <button className="modal" onClick={ this.modalClick }/>
        { this.loggedIn() }
        <button className="exit" onClick={ this.modalClick }>
          <IoClose />
        </button>
        { this.header() }
        <form
          className="session-form"
          onSubmit={ this.handleSubmit }>
          <div className="form-item">
            { this.errors() }
          </div>
          <div className="form-item">
            <label htmlFor="username">Username</label>
            <input
              className="input"
              id="username"
              type="text"
              onChange={ this.handleChange('username') }
              value={ this.state.username }
              autoFocus
              />
          </div>
          { this.email() }
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              id="password"
              type="password"
              onChange={ this.handleChange('password') }
              value={ this.state.password }
              />
          </div>
          <div className="form-item">
            <input
              className="button signup"
              type="submit"
              value={ this.props.formType }
              />
            { this.demoButton() }
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
