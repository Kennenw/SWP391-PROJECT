import { useState, useEffect, useContext } from "react";
// import { auth } from "./firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { UserContext } from './UserContext';

const clientId = '242000824863-hdrd5enmg6b0hg1pbn1pe0asvset9r14.apps.googleusercontent.com';


const Login = ({ users }) => {
    const navigate = useNavigate();
    const [loginField, setLoginField] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");
    const { setUser , setLoginMessage } = useContext(UserContext);
    const [noticeVisible, setNoticeVisible] = useState(false);

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigate("./profile");
    //         }
    //     });

    //     return unsubscribe; // Unsubscribe on unmount
    // }, [navigate]);

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            const user = users.find(user => 
                (user.userName === loginField || user.telephone === loginField) && 
                user.password === password
            );
            if (user) {
                setUser(user);
                setLoginMessage("Login successful");
                if (user.roleID === 1) {
                    navigate("/Dashboard");
                } else if (user.roleID === 2) {
                    navigate("/Home");
                } else if (user.roleID === 3) {
                    navigate("/HomeStaff");
                } else {
                    navigate("/HomeManager");
                }
            } else {
                setNotice("Invalid username or password.");
                setNoticeVisible(true);
                setTimeout(() => {
                    setNoticeVisible(false);
                }, 5000);
            }
        } catch (error) {
            setNotice("An error occurred while trying to log in.");
        }
        // try {
        //     await signInWithEmailAndPassword(auth, email, password);
        // } catch (error) {
        //     if (error.code === 'auth/wrong-password') {
        //         setNotice("The password is invalid or the user does not have a password.");
        //     } else if (error.code === 'auth/user-not-found') {
        //         setNotice("There is no user record corresponding to this identifier. The user may have been deleted.");
        //     } else {
        //         setNotice("An error occurred while trying to log in.");
        //     }
        // }
    };
    const handleCloseNotice = () => {
        setNoticeVisible(false);
    };

    return (
        <div className="loginN">
            <div className = "container-fluid">
                <div className = "row justify-content-center mt-3">
                    <div className = "text-center">
                        <p className = "lead login">Login</p>
                    </div>
                    <div className = "col-md-4 text-center" style={{width: "auto"}}>
                        <p className = "lead re">Please enter your email and password</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center w-100">
                <form className="col-md-4 mt-3 pt-3 pb-3" onSubmit={loginWithUsernameAndPassword} style={{width: "auto", height: "auto"}}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" value={loginField} onChange={(e) => setLoginField(e.target.value)} />
                        <label htmlFor="exampleInputEmail1" className="form-label">Email or telephone</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    </div>
                    <div className="mt-3" style={{textAlign: "right"}}>
                        <span><Link to="/EmailVerify" className="forgot">Forgot password?</Link></span>
                    </div>
                    <div className="d-grid" style={{ margin: '1rem 0'}}>
                        <button type="submit" className="btn btn-primary pt-3 pb-3">Login</button>
                    </div>
                    {notice && (
                        // <div className="success">
                        <div className={`error ${noticeVisible ? '' : 'hide'}`}>
                            <span className="check"><i className="fa fa-warning"></i></span>
                            <span className="msg">{notice}</span>
                            <span className="crose" onClick={handleCloseNotice}><i className="fa fa-times"></i></span>
                        </div>
                    )}
                    <div className="or">OR</div>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        disabled={false}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                    <div className="mt-3 text-center">
                        <span>Need to sign up for an account? <Link to="/Register">Sign up</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
