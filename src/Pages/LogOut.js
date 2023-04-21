import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function LogOut(){
    const navigate = useNavigate()
    useEffect(()=>{
        localStorage.clear("chat-app-user")
        localStorage.clear("ApplicationView")
        navigate("/Login")
    }, [])
    // const removeData = localStorage.removeData("chat-app-user")
    return <>

    </>
}