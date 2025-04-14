import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = ({ 
  title, 
  lastUpdated, 
  sections, 
  buttonText,
  onBackClick 
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.updateDate}>Последнее обновление: {lastUpdated}</p>

      <div className={styles.content}>
        {sections.map((section, index) => (
          <Section 
            key={index}
            title={section.title}
            content={section.content}
            lists={section.lists}
            address={section.address}
          />
        ))}
      </div>

      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={onBackClick}>
          <span className={styles.buttonText}>{buttonText}</span>
          <span className={styles.buttonIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

const Section = ({ title, content, lists, address }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.sectionContent}>
      {content && content.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      
      {lists && lists.map((list, i) => (
        <div key={i}>
          <p>{list.title}</p>
          <ul className={styles.list}>
            {list.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      
      {address && (
        <address className={styles.address}>
          <p>{address.company}</p>
          <p>{address.street}</p>
          <p>Телефон: {address.phone}</p>
          <p>Email: {address.email}</p>
        </address>
      )}
    </div>
  </section>
);

PrivacyPolicy.propTypes = {
  title: PropTypes.string,
  lastUpdated: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string),
      lists: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          items: PropTypes.arrayOf(PropTypes.string)
        })
      ),
      address: PropTypes.shape({
        company: PropTypes.string,
        street: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string
      })
    })
  ).isRequired,
  buttonText: PropTypes.string,
  onBackClick: PropTypes.func.isRequired
};

PrivacyPolicy.defaultProps = {
  title: 'Политика конфиденциальности',
  lastUpdated: new Date().toLocaleDateString('ru-RU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }),
  buttonText: 'Вернуться на главную'
};

export default PrivacyPolicy;