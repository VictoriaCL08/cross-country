
import React from "react";
import {useState} from "react";


function ContactUs() {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa3d2369-feb8-4934-9456-146e38ec4967");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" required/>
        <input type="email" name="email" required/>
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}

export default ContactUs;