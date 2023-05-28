import Input from "./Input";
import Button from "@mui/material/Button";
import { useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
     const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    
    const {value} = e.target

    emailjs
      .send(
        "service_lj1b11f",
        "template_g9qgq3s",
        	templateParams,
        "0fYsP3o1SkEqHwf5w"
      )
      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
      setName("");
          setEmail("");
          setMessage("");
  };

  return (
    <div className="all main">
      <div className="all contact">
        <h1 id="contact">Want to get in touch? Drop me a line!</h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
          <input value={name}  onChange={(e) => setName(e.target.value)}
           placeholder="Enter Your Name"
          />
          
            <input 
             onChange={(e) => setEmail(e.target.value)}
             value={email}
       
             placeholder="Enter Your Email" />
          </div>

          <textarea rows={20} className="area"
           value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
          ></textarea>
          <Button variant="outlined" size="medium" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
