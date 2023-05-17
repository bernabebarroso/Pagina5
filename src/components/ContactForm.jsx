import React, { useState } from "react";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
  };

  return (
    <div className={style.contactFormContainer}>
      <h2>Contáctanos</h2>
      <p>
        ¿Tenes alguna pregunta o comentario acerca de nuestros productos? Por
        favor completa el siguiente formulario y te responderemos a la brevedad.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <button type="submit" disabled={submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
