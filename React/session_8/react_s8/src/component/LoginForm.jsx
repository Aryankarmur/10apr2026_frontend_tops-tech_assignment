import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const LoginForm = () => {
    const [name, setName]=useState("");
    const [pass, setPass]=useState("");

    const UserName = useRef(null);
    const UserPass = useRef(null);

    const handleSubmit = (e)=>{
        e.preventDefault();

        UserName.current.value="";
        UserPass.current.value ="";

        UserName.current.focus();

    }

  return (
    <div>
        <br />
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="u_name">
                User Name : 
                <input type="text" id='u_name' ref={UserName} value={name}/>
            </label>
            <br /><br />
            <label htmlFor="u_pass">
                Password : 
                <input type="password" id='u_pass' ref={UserPass} value={pass}/>
            </label>
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm