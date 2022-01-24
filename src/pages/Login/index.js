import React, {useState} from 'react'
import './login.css'
import { MdEmail } from "react-icons/md"
import { MdOutlineLock } from "react-icons/md"
import { HiEye,HiEyeOff } from "react-icons/hi"
function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword]=useState("")
    const [show, setShow]=useState(false)
    const handleClick = (e) =>{
        e.preventDefault()
        setShow(!show);
    } 
    return (
        <div className="login">
       <div className="login-logo">
       </div>
       <div className="login-right">
        <h1>Login</h1>

        <div className="login-InputEmail">
        <MdEmail />

                <input 
                type="email"
                placeholder="Username"
                value={email}
                onChange={e => setEmail(e.target.value)}

                />
                </div>
       <div className="login-InputPassword">
       <MdOutlineLock/>
               
                     <input 
                placeholder="Paswword"
                type={show ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
              
        <div className='login-eye'>
        {show ? (
            <HiEye size={20} 
            onClick={handleClick}
            />
        ) : (
            <HiEyeOff size={20}
            onClick={handleClick}
             />
        )}

        </div>


        </div>
        <button type="submit">
            Entrar
        </button>
           <a href=''> Lost Your Password ?</a>
            

      </div>

     </div>
     
    )
    
}

export default Login