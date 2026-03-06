"use client";

import { useState } from "react";
import Container from "@/components/UI/Container/Container";
import styles from "./FaqSection.module.css";

const faqItems = [
  {
    question: "What types of photography services do you offer?",
    answer:
      "We offer a wide range of photography services including wedding photography, family portraits, product photography, event photography, and custom sessions tailored to your specific needs.",
  },
  {
    question: "How do I book a photography session with Kerataon Studio?",
    answer:
      "Reach out through our contact page or social channels, then we confirm availability, discuss your vision, and finalize the booking details together.",
  },
  {
    question: "How far in advance should I book my session?",
    answer:
      "For weddings, booking 2 to 6 months in advance is recommended. For portraits and smaller sessions, 2 to 4 weeks is usually enough.",
  },
  {
    question: "Can I request specific locations for my photo session?",
    answer:
      "Yes. You can suggest locations you love, and we can also recommend spots based on light, style, and the mood you want.",
  },
  {
    question: "How long will it take to receive my edited photos?",
    answer:
      "Typical delivery is 1 to 3 weeks depending on package and season. You will receive a preview first, then the full edited gallery.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>FAQ</h2>

          <div className={styles.list}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className={`${styles.item} ${isOpen ? styles.open : ""}`}
                >
                  <button
                    type="button"
                    className={styles.questionBtn}
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </button>

                  <div className={styles.answerWrap}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
