import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demo = this.demo.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/wheel");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  demo(e) {
    e.preventDefault();
    let user = {
      email: "chopper@chopper.com",
      password: "123456"
    };
    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="background">
          <h1 className="signup-form-header">Login</h1>
          <form className="login-form-box" onSubmit={this.handleSubmit}>
            <br />
            <div className="login-form">
              <input
                className="login-input"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <br />
              <input
                className="login-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <br />
              <input className="session-submit" type="submit" value="Login" />
              <br />
              <br />
              <p className="policy-paragraph">
                We may use your email and devices for updates and tips on
                YouChoose's products and services and for activities
                notifications. You can unsubscribe for free at any time in your
                notification settings. We may use information you provide us in
                order to show you targeted ads as described in our Privacy
                Policy.
              </p>

              <div className="errors">{this.renderErrors()}</div>
              <br />
              <button className="demo-login" onClick={this.demo}>Demo Login</button>
            </div>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
