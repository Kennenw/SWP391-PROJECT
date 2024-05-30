import React, {useState} from "react";
import { NavLink , Link } from "react-router-dom";

const Verify = () => {
    const [email, setEmail] = useState("");
    const [notice, setNotice] = useState("");
    return(
        <div className="loginN">
            <div className = "container-fluid">
                <div className = "row justify-content-center mt-3">
                    <div className = "text-center">
                        <p className = "lead login">Verify email</p>
                    </div>
                    <div className = "col-md-4 text-center" style={{width: "auto"}}>
                        <p className = "lead re">Please enter your email</p>
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
                        <div className = "d-grid" style={{ margin: '1rem 0'}}>
                            <NavLink to="/OTPVerify" className = "btn btn-primary pt-3 pb-3">Continue</NavLink>
                            {/* <button type = "submit" className = "btn btn-primary pt-3 pb-3">Continue</button> */}
                        </div>                    
                    </form>
                </div>
        </div>
    );
};

export default Verify;