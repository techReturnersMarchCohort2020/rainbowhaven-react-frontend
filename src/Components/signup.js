import React, { Component } from "react";
import './signup.css'
import { Button } from 'react-bootstrap';


export default class SignUp extends Component {
    render() {
        return (
            <layer className="registration-form">
                <form>
                    <h3>Register To Volunteer</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Full name" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="House number and street name" />
                    </div>
                    <div className="form-group">
                        <label>Post code</label>
                        <input type="text" className="form-control" placeholder="Post code" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Email address " />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Create password" />
                    </div>

                    <div class="text-center" >
                        <Button variant="primary" style={{ width: '100px' }}><a href="/volunteer-Main-Page" style={{ color: 'white' }}>Sign Up</a></Button>
                    </div>
                    <p className=" text-right">
                        Already registered <a href="/sign-in">sign in?</a>
                    </p>
                </form>
            </layer>
        );
    }
}