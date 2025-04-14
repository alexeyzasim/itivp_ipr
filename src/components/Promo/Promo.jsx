import React from "react";
import styles from "./Promo.module.css";

const Promo = ({
  socials = [],
  subtitle,
  title,
  buttonText,
  linkHref,
  linkText,
  onButtonClick,
  backgroundImage,
  titleColor,
  subtitleColor,
}) => {
  return (
    <section className={styles.promo}>
      {backgroundImage && (
        <img src={backgroundImage} alt="" className={styles.backgroundImage} />
      )}

      <div className={styles.socials}>
        <p className={`${styles.socials__label} ${styles.subtitle}`}>
          Социальные сети
        </p>
        <div className={styles.socials__line}></div>

        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className={styles[social.className]}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className={styles.promo__content}>
        <div className={styles["icon-bg"]}></div>
        <div className={`${styles.promo__subtitle} ${styles.subtitle}`} style={{ color: subtitleColor }} >
          {subtitle}
        </div>
        <h1 className="promo__title" style={{ color: titleColor }}>
          {title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <div className={styles.promo__row}>
          <button
            className={`${styles.promo__button} ${styles.button}`}
            onClick={onButtonClick} // Используем переданный обработчик
          >
            <span>{buttonText}</span>
          </button>
          <a href={linkHref} className={styles.promo__link}>
            {linkText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promo;
