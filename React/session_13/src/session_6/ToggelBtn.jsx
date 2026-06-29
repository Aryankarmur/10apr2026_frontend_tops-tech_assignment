import React, { useState } from "react";

const ToggelBtn = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <h2>{isLogin ? "Welcome, User" : "Please login"}</h2>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Log Out" : "Log In"}
      </button>
    </>
  );
};

export default ToggelBtn;
