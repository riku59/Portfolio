import React, { useRef } from "react";

import useScrollVisibility from "../data/useScrollVisibility";

import emailjs from "@emailjs/browser";

const ContactMe = ({ language }) => {
  const contactMeRef = useRef(null);
  const isVisible = useScrollVisibility(contactMeRef);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_ts2j5jh`, // service ID
        "template_oeyg4tr", //  template ID
        form.current, // modèle template
        "CyYv8QtOussiCWpyM" // clé public
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me" id="contact" ref={contactMeRef}>
      <h3 className={isVisible ? "visible" : ""}>
        {language ? "Me contacter" : "Contact me"}
      </h3>
      <form
        className={isVisible ? "visible" : ""}
        action=""
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="nom"
          id="nom"
          required
          placeholder={language ? "Nom" : "Name"}
        />

        <input type="email" id="email" name="email" placeholder="Email" />

        <input
          type="text"
          name="objet"
          id="objet"
          required
          placeholder={language ? "Objet" : "Object"}
        />

        <textarea
          name="message"
          id="message"
          cols="30"
          placeholder={language ? "Entrez votre message" : "Enter your message"}
        ></textarea>
        <input type="submit" id="submit" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactMe;
