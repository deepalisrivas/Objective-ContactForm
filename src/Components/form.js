import React, { Component } from "react";
import "./form.scss";
import axios from "axios";
import history from "../utils/history"

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      message: "",
      phone: "",
      fNameError: true,
      lNameError: true,
      emailError: true,
      phoneError: true,
      messageError: true,
      isEnabled: false,
    };
  }
  valueOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    if (name === "fName") {
      if (value !== "" && /^[a-zA-Z]*$/.test(value)) {
        this.setState({ fNameError: false }, () => {}, 100);
      } else {
        this.setState({ fNameError: true }, () => {}, 100);
      }
    } else if (name === "lName") {
      if (value !== "" && /^[a-zA-Z]*$/.test(value)) {
        this.setState({ lNameError: false }, () => {}, 100);
      } else {
        this.setState({ lNameError: true }, () => {}, 100);
      }
    } else if (name === "email") {
      if (
        value !== "" &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        this.setState({ emailError: false }, () => {}, 100);
      } else {
        this.setState({ emailError: true }, () => {}, 100);
      }
    } else if (name === "phone") {
      if (value !== "" && /^[0-9]{10}$/.test(value)) {
        this.setState({ phoneError: false }, () => {}, 100);
      } else {
        this.setState({ phoneError: true }, () => {}, 100);
      }
    } else if (name === "message") {
      if (value !== "") {
        this.setState({ messageError: false }, () => {}, 100);
      } else {
        this.setState({ messageError: true }, () => {}, 100);
      }
    }
  };

  validateForm = () => {
    const first_name = this.state.fName;
    const last_name = this.state.lName;
    const email_address = this.state.email;
    const phone_number = this.state.phone;
    const msg = this.state.message;

    const registerUser = {
      fName: first_name,
      lName: last_name,
      email: email_address,
      message: msg,
      phone: phone_number,
    };
    axios
      .post("http://localhost:3001/tasks", registerUser)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const {
      fNameError,
      lNameError,
      emailError,
      phoneError,
      messageError,
    } = this.state;
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>Have a query? Write to Us!</p>
          </div>
          <div className="col-md-9 register-right">
            <h3 className="register-heading">Contact Us Here</h3>
            <div className="row register-form">
              <div className="col-md-6">
                <div className="form-group">
                  {this.state.fNameError ? (
                    <div className={`error-text`}>
                      Please Enter Valid Details
                    </div>
                  ) : null}
                  <input
                    name="fName"
                    type="text"
                    value={this.state.fName}
                    className={`form-control ${
                      this.state.fNameError ? "error-class" : null
                    }`}
                    placeholder="First Name *"
                    onChange={(e) => this.valueOnChange(e)}
                  />
                </div>
                <div className="form-group">
                  {this.state.lNameError ? (
                    <div className={`error-text`}>
                      Please Enter Valid Details
                    </div>
                  ) : null}
                  <input
                    name="lName"
                    type="text"
                    value={this.state.lName}
                    className={`form-control ${
                      this.state.lNameError ? "error-class" : null
                    }`}
                    placeholder="Last Name *"
                    onChange={(e) => this.valueOnChange(e)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={this.state.message}
                    className={`form-control ${
                      this.state.emailError ? "error-class" : null
                    }`}
                    placeholder="Enter Your Message *"
                    onChange={(e) => this.valueOnChange(e)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  {this.state.emailError ? (
                    <div className={`error-text`}>
                      Please Enter Valid Details
                    </div>
                  ) : null}
                  <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    className={`form-control ${
                      this.state.emailError ? "error-class" : null
                    }`}
                    placeholder="Your Email *"
                    onChange={(e) => this.valueOnChange(e)}
                  />
                </div>
                <div className="form-group">
                  {this.state.phoneError ? (
                    <div className={`error-text`}>
                      Please Enter Valid Details
                    </div>
                  ) : null}
                  <input
                    name="phone"
                    type="text"
                    maxLength="10"
                    value={this.state.phone}
                    className={`form-control ${
                      this.state.phoneError ? "error-class" : null
                    }`}
                    placeholder="Your Phone *"
                    onChange={(e) => this.valueOnChange(e)}
                  />
                </div>
                <input
                  type="submit"
                  className="btnRegister"
                  value="Submit"
                  onClick={() => {this.validateForm();history.push('/thank-you.html') }}
                  disabled={
                    !fNameError &&
                    !lNameError &&
                    !emailError &&
                    !phoneError &&
                    !messageError
                      ? ``
                      : `disabled`
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
