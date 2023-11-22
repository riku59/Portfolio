import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <h3>Me contacter</h3>
      <form action="">
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" id="nom" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="objet">objet</label>
        <input type="text" name="objet" id="objet" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default ContactMe;
