import './Login.css'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Login(){
    const navigate = useNavigate();
     return(
         <div className="container">
             <div className="login">
                 <div className="header">
                    LOGIN
                 </div>
                 <form className="inputs" onSubmit={()=>navigate('/todo')}>
                     <input className="username" placeholder="Enter the username" required/>
                     <input className="password" placeholder="Enter the password" type='password' required/>
                    <div className="reg">
                        Don't have an account?<Link to='/signup'>Signup</Link>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button className="submit">Login</button>
                    </div>
                 </form>
             </div>
         </div>
     )
}


export default Login