import React, { useState } from 'react'

const LoginForm = () => {
    const [ userName, setUserName]=useState("");
    const [ pass, setPass]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
       alert(`Username : ${userName} and Password : ${pass}`);

       setUserName("");
       setPass("");

    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login form</h2>
        <label htmlFor="name">Username : 
            <input type="text" id='name' name='username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        </label><br /><br />
        <label htmlFor="pass">Password : 
            <input type="password" id='pass' name='password' value={pass} onChange={(e)=>setPass(e.target.value)} />
        </label><br /><br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default LoginForm