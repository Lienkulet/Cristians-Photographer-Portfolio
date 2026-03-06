import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={styles.form} action="#" method="post">
      <div className={styles.row}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
      </div>
      <textarea name="message" placeholder="Message" rows={8} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default ContactForm;
