import { useEffect, useState } from "react"
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "../Styles/RegistrationForm.css"

export default function RegistrationForm() {
    const [userFormData, setUserFormData] = useState({
        name: "",
        phone: "",
        email: "",
        rID: "",
        tenmark: "",
        Twelvemark: "",
        address: "",
        gender: "",
        stream: "",
        Aadhar: ""
    })

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserFormData({ ...userFormData, [e.target.name]: e.target.value })
    }
    const getLocalStorageDetails = JSON.parse(localStorage.getItem("chat-app-user"))
    console.log(getLocalStorageDetails)
    

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const { name, email, phone, tenmark, Twelvemark, rID, address, gender, stream, Aadhar } = userFormData
            const { data , status} = await axios.post("http://localhost:5000/RegistrationForm", {
                name, email, phone, tenmark, Twelvemark, rID, address, gender, stream, Aadhar
            })
            if(status === 204){
                toast.error("All field are required", toastOptions)
            } else if(status === 202){
                toast.error("User already filled form with email id")
            } else if(status === 200){
                localStorage.setItem("ApplicationView", JSON.stringify(data))
                window.alert("User Form Submitted")
                navigate("/ApplicationView")
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (getLocalStorageDetails == null) {
            return navigate("/Login")
        }
    }, [])


    return <>
        {
            getLocalStorageDetails == null ? <h1>User not in Login</h1> :
                <div className="RcardNew bg-light">
                    <div className="headerOne">
                        <h1>Candidate Registration form for Addmission</h1>
                    </div>
                    <form method="POST" className="formDiv">
                        <div className="onlyInput">
                            <div className="formPart1">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" autoComplete="off"
                                    onChange={(e) => handleChange(e)} required
                                /><br></br>

                                <label htmlFor="phone">Phone</label>
                                <input type="text" name="phone" placeholder="Phone Number" autoComplete="off" class="form-control"
                                    onChange={(e) => handleChange(e)} required
                                /><br></br>

                                <label htmlFor="name">Email</label>
                                <input type="email" name="email" placeholder="Email" autoComplete="off" class="form-control"
                                    onChange={(e) => handleChange(e)} required
                                /><br></br>

                                {/* <label htmlFor="gender">Gender</label>
                                <input type="text" name="gender" class="form-control" onChange={(e) => handleChange(e)} required /><br></br> */}

                                <label htmlFor="gender">Gender</label>
                                <select class="form-control" name="gender" onChange={(e) => handleChange(e)} required aria-label="Default select example">
                                    <option value="" selected>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select><br></br>


                                <label htmlFor="phone">Refrence ID</label>
                                <input type="text" name="rID" class="form-control" placeholder="Refrence ID" autoComplete="off"
                                    onChange={(e) => handleChange(e)} required
                                /><br></br>

                            </div>
                            <div className="formPart2">
                                <label htmlFor="name">10th Marks</label>
                                <input type="text" name="tenmark" placeholder="10th Mark" autoComplete="off" class="form-control"
                                    onChange={(e) => handleChange(e)} required /><br></br>

                                <label htmlFor="name">12th Marks</label>
                                <input type="text" name="Twelvemark" placeholder="12th Mark" autoComplete="off" class="form-control"
                                    onChange={(e) => handleChange(e)} required /><br></br>

                                <label htmlFor="name">Address</label>
                                <textarea type="text" name="address" placeholder="Address" autoComplete="off" class="form-control"
                                    onChange={(e) => handleChange(e)} required /><br></br>


                                {/* <input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)} /><span>Female</span> */}

                                <label htmlFor="stream">Stream</label>
                                <input type="text" name="stream" placeholder="stream" autoComplete="off" class="form-control"
                                    onChange={(e) => handleChange(e)} required /><br></br>

                                <label htmlFor="Aadhar">Aadhar Card No.</label>
                                <input type="text" name="Aadhar" placeholder="Aadhar Number" autoComplete="off" class="form-control"
                                    onChange={(e) => handleChange(e)} required /><br></br>
                            </div>
                        </div>
                        <div className="formBtn">
                            <button type="text" class="btn btn-primary" onClick={handleSubmit}>Submit Form</button>
                        </div>
                    </form>
                </div>
        }
        <ToastContainer />
    </>
}