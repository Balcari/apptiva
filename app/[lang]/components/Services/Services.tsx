"use client";

import React from "react";
import * as styles from "./styles";
import type { ServicesProps } from "./types";

const Services: React.FC<ServicesProps> = ({ dictionary }) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>{dictionary.title}</h1>

      <section className={styles.section}>
        <h2 className={styles.subheading}>{dictionary.frontendTitle}</h2>
        <p className={styles.paragraph}>{dictionary.frontendDescription}</p>
        <ul className={styles.list}>
          <li>{dictionary.frontendItem1}</li>
          <li>{dictionary.frontendItem2}</li>
          <li>{dictionary.frontendItem3}</li>
          <li>{dictionary.frontendItem4}</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>{dictionary.aiTitle}</h2>
        <p className={styles.paragraph}>{dictionary.aiDescription}</p>
        <ul className={styles.list}>
          <li>{dictionary.aiItem1}</li>
          <li>{dictionary.aiItem2}</li>
          <li>{dictionary.aiItem3}</li>
          <li>{dictionary.aiItem4}</li>
        </ul>
      </section>

      <section className={styles.ctaSection}>
        <h3 className={styles.ctaHeading}>{dictionary.readyTitle}</h3>
        <p className={styles.paragraph}>
          {dictionary.readyText}{" "}
          <a href="mailto:luis@apptiva.site" className={styles.link}>
            luisgoyburo@apptiva.site
          </a>
        </p>
      </section>
    </main>
  );
};

export default Services;
