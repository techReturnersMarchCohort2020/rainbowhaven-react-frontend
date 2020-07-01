import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Telephone</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div class="text-center" >
                <Button variant="primary" style={{width:'100px'}}><a href="/volunteer-Main-Page" style={{color: 'white'}}>Sign Up</a></Button>
                </div>
                <p className=" text-right">
                    Already registered <a href="/sign-in">sign in?</a> 
                </p>
            </form>
        );
    }
}