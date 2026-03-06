import React from "react";
import styles from "./ContactInfoCards.module.css";
import ContactInfoCard from "@/components/ContactInfoCard/ContactInfoCard";

const ContactInfoCards = ({ items = [], stacked = false }) => {
  return (
    <div className={`${styles.contactInfoGrid} ${stacked ? styles.stacked : ""}`}>
      {items.map((item) => (
        <ContactInfoCard key={item.title} item={item} />
      ))}
    </div>
  );
};

export default ContactInfoCards;
