import './css/ContactUs.css'
import React from "react";

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
    <main>
    <div class="contact-title">
                <h3 className="page-title">Contact Us</h3>
            </div>
            <form onSubmit={onSubmit}>
            <section class="contact-form columns">
                <div class="one contact-form">
                    <h3>First Name</h3>
                    <input type="text" name="name" class="textbox" required></input>
                </div>
                <p></p>
            </section>
            <section class="contact-form">
                <h3>Email Address</h3>
                <input type="email" name="email" class="textbox" required></input>
               
            </section>
            <section class="contact-form">
                <h3>Write Message</h3>
                <textarea name='message' class="textbox2" required></textarea>
            </section>
            <section class="btn">
                <button type="submit" id="btn-sumbit">Submit</button>
            </section>
            </form>
            <span>{result}</span>
    </main>
  )  
};

export default ContactUs;