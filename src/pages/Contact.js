import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../style/Contact.css";
function Contact(props) {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form
          id="contact-item"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <label htmlFor="name"> Full Name</label>
          <input name="name" placeholder="Enter full name ..." type="text" />
          <input type="hidden" name="form-name" value="name_of_my_form" />

          <label htmlFor="email"> Email</label>
          <input name="email" placeholder="Enter mail..." type="email" />
          <input type="hidden" name="form-name" value="name_of_my_form" />

          <label htmlFor="message"> Message</label>
          <textarea
            rows="6"
            placeholder="Enter Message ..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
