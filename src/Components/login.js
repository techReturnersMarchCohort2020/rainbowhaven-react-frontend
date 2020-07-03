import React, { useState } from "react";
import './login.css';
import { Button } from 'react-bootstrap';



// export default class Login extends Component {
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loggedIn, setLoggedIn] = useState(false)
    console.log(loggedIn)
    
    function handleEmailChange(event){
        setEmail(event.target.value)
      }
    
    function handlePasswordChange(event) {
          setPassword(event.target.value)
      }

    function handleSubmitClick(event) {
        event.preventDefault()
        if (email === "kate@rainbowhaven.com" && password === "Rainbow1") {
                    alert("Log in successful");
                    setLoggedIn(true)
                    //Add link that directs to manager homepage
                }
        else if (email === "johnjones@live.com" && password === "Lightning1") {
                    alert("Log in successful");
                    setLoggedIn(true)
                    //Add link that directs to volunteer homepage
                }
        else if (email === "suziday@sky.com" && password === "Thunder1") {
                    alert("Log in successful");
                    setLoggedIn(true)
                    //Add volunteer if statement and link to volunteer page
                }
        else {
                    alert("Incorrect log in details");
                }
        console.log(email, password)
  
    }

        return (
            <form>
                <h3>Rainbow Haven</h3>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={ handleEmailChange }/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        onChange={ handlePasswordChange } />
                    <input type="checkbox"></input>
                    <label className="remember"> Remember me</label>
                    <p className="text-right">
                        <a href="/sign-up">Forgot password?</a>
                    </p>
                </div>
                <div class="text-center" >
                    {/* <Button variant="primary" style={{ width: '100px' }}><a href="/volunteer-Main-Page" style={{ color: 'white' }}>Submit</a></Button> */}
                </div>
                    <button type="submit" className="btn btn-primary btn-block btn-login" onClick={handleSubmitClick}>Submit</button>
                <p className=" text-right">
                    Not registered? <a href="/sign-up">SignUp</a>
                </p>
            </form>
            )
};

export default Login;
