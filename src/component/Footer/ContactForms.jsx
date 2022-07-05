import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {


  const [state, handleSubmit] = useForm("mlezkply");
  if (state.succeeded) {
    return <p>Thanks you, I'll get back to you shortly</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Drop me a line
      </h1>
      <input
        type="text"
        name='name'
        id="name"
        placeholder="Company name"
        className="input name"
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your E-mail"
        className="input email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Aditional Information"
        className="input textarea"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm
