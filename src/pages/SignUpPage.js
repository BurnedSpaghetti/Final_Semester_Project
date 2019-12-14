import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import '../App.css';

export default class Signup extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/style.css" />
          <title>Bootstrap 4 Login/Register Form</title>
        </head>

        <div
            className="page-layout"
            style={{
              backgroundColor: "#4d568b",
              borderColor: "rgb(245, 206, 56)",
              borderStyle: "solid"
            }}
          >
            <form class="form-horizontal" action="" method="POST">
              <fieldset>
                <div id="legend">
                  <legend class="" style={{ color: "white"}}>Register</legend>
                </div>
                <div class="control-group">
                  <label class="control-label" for="username" style={{ color: "white"}}> Username</label>
                  <div class="controls">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder=""
                      class="input-xlarge"/>
                    <p class="help-block" style={{ color: "white"}}>
                      Username can contain any letters or numbers, without
                      spaces
                    </p>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="email" style={{ color: "white"}}>
                    E-mail
                  </label>
                  <div class="control-group">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      class="input-xlarge"
                    />
                    <p class="help-block" style={{ color: "white"}}>Please provide your E-mail</p>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="password" style={{ color: "white"}}>
                    Password
                  </label>
                  <div class="controls">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder=""
                      class="input-xlarge"
                    />
                    <p class="help-block" style={{ color: "white"}}>
                      Password should be at least 8 characters
                    </p>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="password_confirm" style={{ color: "white"}}>
                    Password (Confirm)
                  </label>
                  <div class="controls">
                    <input
                      type="password"
                      id="password_confirm"
                      name="password_confirm"
                      placeholder=""
                      class="input-xlarge"
                    />
                    <p class="help-block" style={{ color: "white"}}>Please confirm password</p>
                  </div>
                </div>

                <div class="control-group">
                  <div class="controls">
                    <button class="btn btn-success btn-block" style={{ backgroundColor: "#339999", borderColor: "#f5ce38" }}>Register</button>
                    <br/>
                    <Link>Already have an account?</Link>

                  <Link
                    to="/"
                    class="btn btn-success btn-block"
                    style={{ backgroundColor: "#f5ce38", border: "2px solid #339999" }}>
                    <i class="fas fa-sign-in-alt" /> Log in
                  </Link>
                  </div>
                </div>
              </fieldset>
              </form>
              </div>
      </html>
    );
  }
}

