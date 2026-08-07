import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("❌ Failed to send message.");
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>

        {status && <p>{status}</p>}
      </form>
    </section>
  );
};

export default Contact;