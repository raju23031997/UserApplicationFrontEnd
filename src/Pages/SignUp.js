import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/SignUp.css'
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function SignUp() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    const navigate = useNavigate()

    const toastOptions = {
        position: "bottom-right",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const { name, email, phone, password, cpassword } = userData
            const { data, status } = await axios.post("http://localhost:5000/signUp", {
                name, email, phone, password, cpassword
            })

             if (status === 202) {
                // window.alert("User Already Used")
                toast.error("User Already Used", toastOptions)
            } else if (status === 206) {
                // window.alert("password and confirm password are not matching")
                toast.error("password and confirm password are not matching", toastOptions)
            } else if(status === 204){
                toast.error("All field are required", toastOptions)
            } else if(status === 200){
                // localStorage.setItem("chat-app-user", JSON.stringify(data))
                window.alert("registration Done")
                navigate("/Login")
            }
        } catch (error) {
            console.log(error)
        }
            // if (status === 200) {
            //     localStorage.setItem("chat-app-user", JSON.stringify(data))
            //     console.log("data Added")
            // }
    }
    

    return (
        // <div>
        //     <form method='POST'>
        //         <label htmlFor='username'>Name</label>
        //         <input type='text' name='name' placeholder='UserName' autoComplete='off'
        //             onChange={(e) => handleChange(e)} required
        //         /><br></br>

        //         <label htmlFor='Email'>Email</label>
        //         <input type='email' name='email' placeholder="Email" autoComplete='off'
        //             onChange={(e) => handleChange(e)} required
        //         /><br></br>

        //         <label htmlFor='phone'>phone</label>
        //         <input type='text' name='phone' placeholder='Phone Number' autoComplete='off'
        //             onChange={(e) => handleChange(e)} required
        //         /><br></br>

        //         <label htmlFor='password'>Password</label>
        //         <input type='password' name='password' placeholder='Password' autoComplete='off'
        //             onChange={(e) => handleChange(e)} required
        //         /><br></br>

        //         <label htmlFor='cpassword'>Confirm Password</label>
        //         <input type='password' name='cpassword' placeholder='Confirm Password' autoComplete='off'
        //             onChange={(e) => handleChange(e)} required
        //         /><br></br>

        //         <button type='submit' onClick={handleSubmit}>Submit</button>
        //     </form>
        // </div>


        <div className="cardNew bg-light">
            <article className="card-body mx-auto" style={{maxWidth:400}}>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <p>
                    <Link href="" className="btn btn-block btn-twitter"> <i className="fa fa-twitter"></i>   Login via Twitter</Link>
                    <Link href="" className="btn btn-block btn-facebook"> <i className="fa fa-facebook-f"></i>   Login via facebook</Link>
                </p>
                <p className="divider-text">
                    <span className="bg-light">OR</span>
                </p>
                <form method='POST'>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input name="name" className="form-control" placeholder="Full name" type="text"
                            onChange={(e) => handleChange(e)} required autoComplete='off'
                        />
                    </div> 
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input name="email" className="form-control" placeholder="Email address" type="email" 
                            onChange={(e) => handleChange(e)} required autoComplete='off'
                        />
                    </div> 
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i class="fa fa-phone"></i> </span>
                        </div>
                        <select className="custom-select" style={{maxWidth:120}}>
                            <option selected="">+971</option>
                            <option value="1">+972</option>
                            <option value="2">+198</option>
                            <option value="3">+701</option>
                        </select>
                        <input name="phone" className="form-control" placeholder="Phone number" type="text" 
                            onChange={(e) => handleChange(e)} required autoComplete='off'
                        />
                    </div>
                    {/* <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-building"></i> </span>
                        </div>
                        <select class="form-control">
                            <option selected=""> Select job type</option>
                            <option>Designer</option>
                            <option>Manager</option>
                            <option>Accaunting</option>
                        </select>
                    </div>  */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input name='password' className="form-control" placeholder="Create password" type="password" 
                            onChange={(e) => handleChange(e)} required autoComplete='off'
                        />
                    </div> 
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input name='cpassword' className="form-control" placeholder="Repeat password" type="password" 
                            onChange={(e) => handleChange(e)} required autoComplete='off'
                        />
                    </div> 
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}
                        > Create Account  </button>
                    </div> 
                    <p className="text-center">Have an account? <Link to="/Login">Log In</Link> </p>
                </form>
            </article>
            <ToastContainer />
        </div>
    )
}

export default SignUp
