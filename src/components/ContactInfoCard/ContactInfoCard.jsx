import React from "react";
import styles from "./ContactInfoCard.module.css";
import EmailIcon from "@/components/Icons/EmailIcon";
import OficeIcon from "@/components/Icons/OficeIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";

const icons = {
  email: <EmailIcon />,
  office: <OficeIcon />,
  ofice: <OficeIcon />,
  phone: <PhoneIcon />,
};

const ContactInfoCard = ({ item }) => {
  return (
    <article className={styles.infoCard}>
      <span className={styles.iconBox} aria-hidden="true">
        {icons[item.icon] ?? icons.email}
      </span>
      <h2>{item.title}</h2>
      <p>{item.subtitle}</p>

      {item.type === "address" ? (
        <address>
          {item.valueLine1}
          <br />
          {item.valueLine2}
        </address>
      ) : (
        <a href={item.href}>{item.value}</a>
      )}
    </article>
  );
};

export default ContactInfoCard;
