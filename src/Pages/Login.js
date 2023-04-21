import { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../Styles/Login.css'

export default function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const toastOptions = {
        position: "bottom-right",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    const navigate = useNavigate()


    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const { email, password } = userData
            const { data, status } = await axios.post("http://localhost:5000/login", {
                email, password
            })
            // if(status === 204){
            //     toast.error("All field are required", toastOptions)
            // } else
            
            if(status === 200){
                localStorage.setItem("chat-app-user", JSON.stringify(data.name))
                window.alert("Login Done")
                navigate("/RegistrationForm")
            } else if(status === 204){
                toast.error("Invalid Credential", toastOptions)
            } 
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        {/* <form method="POST">
            <label htmlFor='Email'>UserEmail</label>
            <input type='email' name='email' placeholder="Email" autoComplete='off'
                onChange={(e) => handleChange(e)}
            /><br></br>

            <label htmlFor='password'>Password</label>
            <input type='text' name='password' placeholder='Password' autoComplete='off'
                onChange={(e) => handleChange(e)}
            /><br></br>

            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form> */}
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fa fa-facebook-square"></i></span>
                            <span><i className="fa fa-google-plus-square"></i></span>
                            <span><i className="fa fa-twitter-square"></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form method="POST">
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="email" name="email" class="form-control" placeholder="username" 
                                    onChange={(e) => handleChange(e)} autoComplete="off" required
                                />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="password" name="password"
                                    onChange={(e) => handleChange(e)} autoComplete="off" required
                                />
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login" className="btn float-right login_btn"
                                    onClick={handleSubmit}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<Link to="/SignUp">Sign Up</Link>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
}