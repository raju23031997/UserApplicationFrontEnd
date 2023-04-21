import { Link } from "react-router-dom";
import '../Styles/Home.css'
import { useEffect, useState } from "react";
import { black } from "color-name";

export default function Home() {
    const getLocalStorageDetails = JSON.parse(localStorage.getItem("chat-app-user"))
    const [userData, setUserData] = useState("")
    // console.log(getLocalStorageDetails)

    useEffect(()=>{
        if(getLocalStorageDetails == null){
            return 
        } else {
            setUserData(getLocalStorageDetails)
        }
    
        // console.log(getLocalStorageDetails.name)
        // console.log(userData)
    }, [])
    return <>
        <div className="body-part">
            <h1>Welcome to the landing page</h1>
            {userData ? <h3>Hello {userData}</h3>:<h3>User not in login click here for <Link to='/Login' >login</Link> and <Link to="/SignUp">SignUp</Link></h3>}
        </div>
    </>
}