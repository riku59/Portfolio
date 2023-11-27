import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <h3>Me contacter</h3>
      <form action="">
        <input type="text" name="nom" id="nom" placeholder="Nom" />

        <input type="email" id="email" name="email" placeholder="Email" />

        <input type="text" name="objet" id="objet" placeholder="Objet" />

        <textarea
          name="message"
          id="message"
          cols="30"
          placeholder="Entrez votre message"
        ></textarea>
      </form>
    </div>
  );
};

export default ContactMe;
