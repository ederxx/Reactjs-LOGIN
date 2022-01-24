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
           <img src="https://flyclipart.com/downloadpage/images/user-logn-login-member-icon-with-png-and-vector-format-935695.png/935695" alt="Login App"/>
       </div>
       <div className="login-right">
        <h1>LOGIN</h1>

        <div className="login-InputEmail">
        <MdEmail />

                <input 
                type="email"
                placeholder="Digite um Email"
                value={email}
                onChange={e => setEmail(e.target.value)}

                />
                </div>
       <div className="login-InputPassword">
       <MdOutlineLock/>
               
                     <input 
                placeholder="Digite sua senha"
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
            <h4>Não tenho conta</h4>
            <button type="submit">
            Cadastrar
        </button>
       </div>
     </div>
    )
    
}

export default Login