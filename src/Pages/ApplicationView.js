import { useEffect, useState } from "react"
import axios from 'axios'

export default function ApplicationView() {
    const [AllUserData, setAllUserData] = useState({
        name: "",
        phone: "",
        email: "",
        rID: "",
        tenmark: "",
        Twelvemark: "",
        ApplicationID: "",
        address: "",
        gender: "",
        stream: "",
        Aadhar: ""
    })
    const getDatafromLocal = JSON.parse(localStorage.getItem("ApplicationView"))
    // const getAPIData = async () => {
    //     try {
    //         // const getDatafromLocal = JSON.parse(localStorage.getItem("ApplicationView"))
    //         // console.log(getDatafromLocal)
    //         // const {data} = await axios.get("http://localhost:5000/ApplicationView")
    //         // // console.log(getApplication)
    //         // setAllUserData(getDatafromLocal)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        setAllUserData(getDatafromLocal)
        // setAllUserData(data)
        // getAPIData()
    }, [])

    return <>
        <div className="RcardNew bg-light">
            <div className="headerOne">
                <h1>Candidate Application View</h1>
            </div>
            <form method="GET" className="formDiv" onSubmit={(e)=> {
                e.preventDefault()
            }}>
                <div className="onlyInput">
                    <div className="formPart1">
                        <label htmlFor="name">Application ID</label>
                        <input type="text" name="ApplicationID" class="form-control"  disabled value={AllUserData.ApplicationID}
                        /><br></br>


                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" class="form-control" disabled value={AllUserData.name}
                        /><br></br>

                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" class="form-control" disabled value={AllUserData.phone}
                        /><br></br>

                        <label htmlFor="name">Email</label>
                        <input type="email" name="email" class="form-control" disabled value={AllUserData.email}
                        /><br></br>

                        <label htmlFor="name">Gender</label>
                        <input type="text" name="gender" class="form-control" disabled value={AllUserData.gender}
                        /><br></br>

                        <label htmlFor="phone">Refrence ID</label>
                        <input type="text" name="rID" class="form-control" disabled value={AllUserData.rID}
                        /><br></br>

                    </div>
                    <div className="formPart2">
                        <label htmlFor="name">10th Marks</label>
                        <input type="text" name="tenmark" class="form-control"
                            disabled value={AllUserData.tenmark} /><br></br>

                        <label htmlFor="name">12th Marks</label>
                        <input type="text" name="Twelvemark" class="form-control"
                            disabled value={AllUserData.Twelvemark} /><br></br>

                        <label htmlFor="name">Address</label>
                        <textarea type="text" name="address" class="form-control"
                            disabled value={AllUserData.address} /><br></br>

                        <label htmlFor="stream">Stream</label>
                        <input type="text" name="stream" class="form-control"
                            disabled value={AllUserData.stream} /><br></br>

                        <label htmlFor="Aadhar">Aadhar Card No.</label>
                        <input type="text" name="Aadhar" class="form-control"
                            disabled value={AllUserData.Aadhar} /><br></br>
                    </div>
                </div>
                <div className="formBtn">
                    <button type="text" class="btn btn-primary" >Download Form</button>
                </div>
            </form>
        </div>
    </>
}