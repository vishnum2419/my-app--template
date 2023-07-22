import './signup.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    return (
        <div className="cont">
            <div className="signup">
                <div className="h">
                    Register
                </div>
                <form className="in" onSubmit={()=>navigate('/')}>
                    <input className="username" placeholder="Enter the username" required />
                    <input className="email" placeholder="Enter the email" type='email' required />
                    <input className="password" placeholder="Enter the password" type='password' required />
                    <div className="log">
                        Already have an account?<Link to='/'>Login</Link>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="sign">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        //  <div className="container">
        //     <button onClick={()=>navigate('/')}>login</button>
        //  </div>
    )
}


export default Signup