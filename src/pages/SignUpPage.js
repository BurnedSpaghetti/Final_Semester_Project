import React from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
    render(){
        return(
            <form> 
            <h1 class="h3 font-weight-normal" style={{color: "white",textAlign: "center"}}> Sign up</h1>
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
                <button class="btn btn-primary btn-block" type="button" id="signup" style={{backgroundColor: '#f5ce38', border: '2px solid #339999' }}><i class="fas fa-user-plus"></i>Sign up</button>
            </form>
        );
    }
}

export default Signup;