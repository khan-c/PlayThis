import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import IoClose from "react-icons/lib/io/ios-close-empty";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.demoUsers = ["kona", "coco", "bobble", "chip", "dino", "fluffy"];
    this.demo = {
      username: this.demoUsers[Math.floor(Math.random() * 6)].split(""),
      password: "password".split("")
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunc, false);
  }

  componentWillUnmount() {
    const { clearErrors } = this.props;
    document.removeEventListener("keydown", this.escFunc);
    clearErrors();
  }

  handleChange = type => {
    return e => this.setState({ [type]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { processForm } = this.props;

    const user = { ...this.state };
    processForm(user);
  };

  header = () => {
    const { formType } = this.props;

    let header;
    if (formType === "signup") {
      header = <h1>Sign Up</h1>;
    } else {
      header = <h1>Log In</h1>;
    }
    return header;
  };

  errors = () => {
    const { errors } = this.props;

    return errors.map(err => (
      <li className="error" key={err}>
        {err}
      </li>
    ));
  };

  loggedIn = () => {
    const { loggedIn } = this.props;

    let redirect = "";
    if (loggedIn) {
      redirect = <Redirect to="/browse" />;
    }
    return redirect;
  };

  email = () => {
    const { formType } = this.props;
    const { email } = this.state;

    let form = "";
    if (formType === "signup") {
      form = (
        <div className="form-item">
          <label htmlFor="email">
            Email
            <input
              className="input"
              id="email"
              type="text"
              onChange={this.handleChange("email")}
              value={email}
            />
          </label>
        </div>
      );
    }
    return form;
  };

  demoButton = () => {
    const { formType } = this.props;

    if (formType === "login") {
      return (
        <button type="button" className="button demo" onClick={this.clickDemo}>
          Demo This!
        </button>
      );
    }
    return "";
  };

  clickDemo = e => {
    e.preventDefault();
    this.animateUserName();
  };

  animateUserName = () => {
    const { username } = this.state;

    window.setTimeout(() => {
      const animatedUsername = username + this.demo.username.shift();
      this.setState({ username: animatedUsername });

      if (this.demo.username.length > 0) {
        this.animateUserName();
      } else {
        this.animatePassword();
      }
    }, 100);
  };

  animatePassword = () => {
    const { processForm } = this.props;
    const { password } = this.state;

    window.setTimeout(() => {
      const animatedPassword = password + this.demo.password.shift();
      this.setState({ password: animatedPassword });

      if (this.demo.password.length > 0) {
        this.animatePassword();
      } else {
        const user = this.state;
        window.setTimeout(() => processForm(user), 500);
      }
    }, 100);
  };

  modalClick = () => {
    const { history, clearErrors } = this.props;
    history.replace("/");
    clearErrors();
  };

  escFunc = e => {
    const { history, clearErrors } = this.props;
    if (e.keyCode === 27) {
      history.replace("/");
      clearErrors();
    }
  };

  // TODO: refactor with react-modal component instead of hand-rolled modal
  render() {
    const { formType } = this.props;
    const { username, password } = this.state;

    return (
      <div className="user-auth">
        <button type="button" className="modal" onClick={this.modalClick}>
          {this.loggedIn()}
        </button>
        <button type="button" className="exit" onClick={this.modalClick}>
          <IoClose />
        </button>
        {this.header()}
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="form-item">{this.errors()}</div>
          <div className="form-item">
            <label htmlFor="username">
              Username
              {/* eslint-disable jsx-a11y/no-autofocus */}
              <input
                className="input"
                id="username"
                type="text"
                onChange={this.handleChange("username")}
                value={username}
                autoFocus
              />
              {/* eslint-enable jsx-a11y/no-autofocus */}
            </label>
          </div>
          {this.email()}
          <div className="form-item">
            <label htmlFor="password">
              Password
              <input
                className="input"
                id="password"
                type="password"
                onChange={this.handleChange("password")}
                value={password}
              />
            </label>
          </div>
          <div className="form-item">
            <input className="button signup" type="submit" value={formType} />
            {this.demoButton()}
          </div>
        </form>
      </div>
    );
  }
}

SessionForm.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  processForm: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default SessionForm;
