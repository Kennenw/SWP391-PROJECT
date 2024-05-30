import React, { useState } from "react";
// import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import WrongIcon from './icons/wrongIcon';
import CorrectIcon from './icons/correctIcons';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");
    const [passwordErrors, setPasswordErrors] = useState([]);

    const [errors, setErrors] = useState({
        minValueValidation: false,
        numberValidation: false,
        capitalLetterValidation: false,
        specialCharacterValidation: false,
      });
    
      const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
      };
    
      const validatePassword = (password) => {
        setErrors({
          minValueValidation: password.length >= 8,
          numberValidation: /\d/.test(password),
          capitalLetterValidation: /[A-Z]/.test(password),
          specialCharacterValidation: /[^A-Za-z0-9]/.test(password),
        });
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
        <div className="loginN">
            <div className = "container-fluid">
                <div className = "row justify-content-center mt-3">
                    <div className = "text-center">
                        <p className = "lead login">Register</p>
                    </div>
                    <div className = "col-md-4 text-center" style={{width: "auto"}}>
                        <p className = "lead re">Please enter your username and password</p>
                    </div>
                </div>
            </div>

            <div className = "row justify-content-center w-100">
                <form className = "col-md-4 mt-3 pt-3 pb-3" style={{width: "auto", height: "auto"}}>
                    { "" !== notice &&
                        <div className = "alert alert-warning" role = "alert">
                            { notice }    
                        </div>
                    }
                    <div className = "form-floating mb-3">
                        <input id = "signupEmail" type = "email" className = "form-control" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                        <label htmlFor = "signupEmail" className = "form-label">Enter email</label>
                    </div>
                    <div className = "form-floating mb-3">
                        <input id = "signupTel" type = "text" className = "form-control" placeholder = "0989898989" value = { telephone } onChange = { (e) => setTelephone(e.target.value) }></input>
                        <label htmlFor = "signupTel" className = "form-label">Enter telephone</label>
                    </div>
                    <div className = "form-floating mb-3">
                        <input id = "signupPassword" type = "password" className = "form-control" placeholder = "Password" value = { password } onChange = {handlePasswordChange}></input>
                        <label htmlFor = "signupPassword" className = "form-label">Password</label>
                    </div>
                    <div className = "form-floating mb-3">
                        <input id = "confirmPassword" type = "password" className = "form-control" placeholder = "Confirm Password" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
                        <label htmlFor = "confirmPassword" className = "form-label">Confirm Password</label>
                    </div>     
                    {Object.entries(errors).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-4 my-6" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                        {value ? (
                            <CorrectIcon wrapperClass="w-4 h-auto text-white text-green-500" />
                        ) : (
                            <WrongIcon wrapperClass="w-4 h-auto text-white text-red-500" />
                        )}
                        <p className={`text-base font-medium ${value ? 'text-green-500' : 'text-red-500'}`}>
                            {key === 'minValueValidation' && 'Password must be at least 8 Characters'}
                            {key === 'numberValidation' && 'Password must have at least one Number'}
                            {key === 'capitalLetterValidation' && 'Password must have at least one Capital Letter'}
                            {key === 'specialCharacterValidation' && 'Password must have at least one Special Character'}
                        </p>
                        </div>
                    ))}       
                    <div className = "d-grid" style={{ margin: '1rem 0'}}>
                    {/* <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => signupWithUsernameAndPassword(e)}>Register</button> */}
                        <button type = "submit" className = "btn btn-primary pt-3 pb-3">Register</button>
                    </div>
                    <div className = "mt-3 text-center">
                        <span>Already have an account? <Link to = "/Login">Sign in</Link></span>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Signup;