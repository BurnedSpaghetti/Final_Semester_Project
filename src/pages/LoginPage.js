import React from 'react';
import { Redirect } from 'react-router-dom';
import './LoginPage.css';

export default class LoginPage extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="/style.css"/>
                    <title>Bootstrap 4 Login/Register Form</title>
                </head>
                
                <body>
                    <div class = "dickcontainer" style={{backgroundColor: '#4d568b', borderColor: 'rgb(245, 206, 56)', borderStyle: 'solid'}}>
                
                <form > 
                <h1 class="h3 mb-3 font-weight-normal" style={{color: "white",textAlign: "center"}}> Sign in</h1>

                <div class="form-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
                 <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
                </div>
                
                <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" id="autoSizingCheck"/>
                    <label class="form-check-label" for="autoSizingCheck" style={{color:"white"}}>Remember Me</label>
                </div>
                
                <button class="btn btn-success btn-block" type="submit" style={{backgroundColor: '#339999', borderColor: '#f5ce38'}}><i class="fas fa-sign-in-alt"></i> Sign in</button>
                <a href="#" id="forgot_pswd">Forgot password?</a>
                <button class="btn btn-primary btn-block" type="button" id="signup" style={{backgroundColor: '#f5ce38', border: '2px solid #339999' }}><a href="/signup" > <i class="fas fa-user-plus"></i>Sign up</a></button>
            </form> 
            </div>
            </body>
            </html>
        );
    }
}