import React from 'react'
import './login.css'
import { MdEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
function Login(){

    return (
        <div className="login">
       <div className="login-logo">
           <img src="https://flyclipart.com/downloadpage/images/user-logn-login-member-icon-with-png-and-vector-format-935695.png/935695" alt="Login App"/>
       </div>
       <div className="login-right">
        <h1>Acessar App</h1>

        <div className="login-InputEmail">
        <MdEmail/>

                <input 
                type="text"
                placeholder="Digite um Email"></input>
       <div className="login-InputPassword"></div>
       <MdOutlineLock/>
               
                     <input 
                type="text"
                placeholder="Digite sua senha"></input>
              



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