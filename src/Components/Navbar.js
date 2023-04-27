import { Link } from "react-router-dom";
import '../Styles/Navbar.css'


export default function Navbar() {
    const getDatafromLocalforNav = JSON.parse(localStorage.getItem("ApplicationView"))
    console.log(getDatafromLocalforNav)
    return <>
        <header>
            <nav className="mainnav">
                <div className="row">
                    <div className="col-2 logopart">
                        <span>Company Logo</span>
                    </div>
                    <div className="col-10">
                        <ul className="list">
                            {getDatafromLocalforNav == null ? "" :
                                <li>
                                    <Link to="/ApplicationView"><span>Application View</span></Link>
                                </li>
                            }
                            <li>
                                <Link to="/RegistrationForm"><span>Application Form</span></Link>
                            </li>
                            <li>
                                <Link to="/"><span>Home</span></Link>
                            </li>
                            <li>
                                <Link to="/Login"><span>Login</span></Link>
                            </li>
                            <li>
                                <Link to="/SignUp"><span>SignUp</span></Link>
                            </li>
                            <li>
                                <Link to="/logout"><span>LogOut</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
}