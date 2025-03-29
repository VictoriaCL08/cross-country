import './css/ContactUs.css'

function ContactUs() {
  return (
    <main>
    <div class="contact-title">
                <p></p>
                <h3>Contact Us</h3>
            </div>
            <section class="contact-form columns">
                <div class="one contact-form">
                    <h3>First Name</h3>
                    <input type="text" class="textbox"></input>
                </div>
                <div class="one">
                    <h3> Last Name</h3>
                    <input type="text" class="textbox"></input>
                </div>
                <p></p>
            </section>
            <section class="contact-form">
                <h3>Email Address</h3>
                <input type="text" class="textbox"></input>
               
            </section>
            <section class="contact-form">
                <h3>Write Message</h3>
                <input type="text" class="textbox2"></input>
            </section>
            <section class="btn">
                <button id="btn-sumbit">Submit</button>
            </section>
    </main>
  )  
};

export default ContactUs;