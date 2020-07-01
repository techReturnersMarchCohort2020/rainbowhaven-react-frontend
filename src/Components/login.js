import React, { Component } from "react";
import './login.css';
import { Button } from 'react-bootstrap';


export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>United Haven</h3>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                    <input type="checkbox"></input>
                    <label className="remember"> Remember me</label>
                    <p className="text-right">
                        <a href="/sign-up">Forgot password?</a>
                    </p>
                </div>
                <div class="text-center" >
                    <Button variant="primary" style={{ width: '100px' }}><a href="/volunteer-Main-Page" style={{ color: 'white' }}>Submit</a></Button>
                </div>
                {/* //                 <button type="submit" className="btn btn-primary btn-block btn-login">Submit</button> */}
                <p className=" text-right">
                    Not registered? <a href="/sign-up">SignUp</a>
                </p>
            </form>
        );
    }
}