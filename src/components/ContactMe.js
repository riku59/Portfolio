import React, { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const ContactMe = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_ts2j5jh`,
        "template_oeyg4tr",
        form.current,
        "CyYv8QtOussiCWpyM"
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

  const handleScroll = () => {
    const element = aboutMeRef.current;

    if (element) {
      const bounding = element.getBoundingClientRect();
      const isVisible = bounding.top <= window.innerHeight * 0.7;
      setIsVisible(isVisible);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contact-me" id="contact" ref={aboutMeRef}>
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
