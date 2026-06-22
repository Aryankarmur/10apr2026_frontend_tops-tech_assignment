import React from "react";
import { useRef } from "react";

const Feedback = () => {

    const message = useRef(null);

    const handleFeedback = (e)=>{
        e.preventDefault();
    }

  return (
    <div>
      <h2>Feedback</h2>
      <form onSubmit={handleFeedback}>
        <label htmlFor="name">
          User Name :
          <input type="text" id="name" />
        </label>
        <br />
        <br />
        <label htmlFor="message">
          Message :<textarea id="message" cols="30" rows="10" ref={message}></textarea>
        </label>
        <br />
        <br />
        <button type="submit" onClick={()=>message.current.focus()}>Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
