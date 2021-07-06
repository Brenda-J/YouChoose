import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/wheel");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

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
      <div className="signup-form-container">
        <div className="background">
          <h1 className="signup-form-header">Create a New Account!</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
              <br />
              <input
                className="signup-input"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <br />
              <input
                className="signup-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <br />
              <br />
              <input
                className="signup-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <br />
              <input
                className="signup-input"
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <br />
              <br />
              <input className="session-submit" type="submit" value="Sign Up" />
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
