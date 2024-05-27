import React, { useState } from "react";
// import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");
    const [passwordErrors, setPasswordErrors] = useState([]);

    const requirements = [
        { regex: /.{8,}/, message: "Minimum of 8 characters" },
        { regex: /[0-9]/, message: "At least one number" },
        { regex: /[a-z]/, message: "At least one lowercase letter" },
        { regex: /[^A-Za-z0-9]/, message: "At least one special character" },
        { regex: /[A-Z]/, message: "At least one uppercase letter" },
    ];

    const validatePassword = (password) => {
        const errors = requirements
            .filter(req => !req.regex.test(password))
            .map(req => req.message);
        setPasswordErrors(errors);
        return errors.length === 0;
    };


    // const signupWithUsernameAndPassword = async (e) => {
    //     e.preventDefault();

    //     if (password === confirmPassword) {
    //         try {
    //             await createUserWithEmailAndPassword(auth, email, password);
    //             navigate("/");
    //         } catch {
    //             setNotice("Sorry, something went wrong. Please try again.");
    //         }     
    //     } else {
    //         setNotice("Passwords don't match. Please try again.");
    //     }
    // };

    return(
        <div className="">
            <div className = "container-fluid">
                <div className = "row justify-content-center mt-3">
                    <div className = "text-center">
                        <p className = "lead login">Register</p>
                    </div>
                    <div className = "col-md-4 text-center">
                        <p className = "lead re">Please enter your username and password</p>
                    </div>
                </div>
            </div>

            <div className = "container">
                <div className = "row justify-content-center">
                    <form className = "col-md-4 mt-3 pt-3 pb-3">
                        { "" !== notice &&
                            <div className = "alert alert-warning" role = "alert">
                                { notice }    
                            </div>
                        }
                        <div className = "form-floating mb-3">
                            <input id = "signupEmail" type = "email" className = "form-control" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                            <label htmlFor = "signupEmail" className = "form-label">Enter username</label>
                        </div>
                        <div className = "form-floating mb-3">
                            <input id = "signupPassword" type = "password" className = "form-control" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                            <label htmlFor = "signupPassword" className = "form-label">Password</label>
                        </div>
                        <div className = "form-floating mb-3">
                            <input id = "confirmPassword" type = "password" className = "form-control" placeholder = "Confirm Password" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
                            <label htmlFor = "confirmPassword" className = "form-label">Confirm Password</label>
                        </div>     
                        {passwordErrors.length > 0 && (
                            <div className="alert alert-danger" role="alert">
                                <ul>
                                    {passwordErrors.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}               
                        <div className = "d-grid">
                        {/* <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => signupWithUsernameAndPassword(e)}>Register</button> */}
                            <button type = "submit" className = "btn btn-primary pt-3 pb-3">Register</button>
                        </div>
                        <div className = "mt-3 text-center">
                            <span>Go back to login? <Link to = "/Login">Click here.</Link></span>
                        </div>                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;