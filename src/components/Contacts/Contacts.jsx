import React, { useRef } from "react";
import styles from "./Contacts.module.css";

const Contacts = ({
  photoAbout,
  contactsTitle = "Свяжитесь с нами",
  contactsSubtitle = "Контакты",
  contactsText = "Любым удобным для Вас способом:",
  formText = "Или оставьте ваши данные, и мы сами вам напишем:",
  onPrivacyPolicyClick,
  socialLinks = [
    {
      href: "https://www.facebook.com",
      className: styles.contacts__socialLinkFacebook,
      ariaLabel: "Facebook",
      svgPath: (
        <path
          d="M25.6 0H4.39C1.97 0 0 1.97 0 4.39V25.6C0 28.02 1.97 30 4.39 30H13.24V19.39H9.72V14.12H13.24V10.54C13.24 7.63 15.6 5.27 18.51 5.27H23.84V10.54H18.51V14.12H23.84L22.96 19.39H18.51V30H25.6C28.02 30 30 28.02 30 25.6V4.39C30 1.97 28.02 0 25.6 0Z"
          fill="#000000"
        />
      ),
    },
    {
      href: "https://web.telegram.org",
      className: styles.contacts__socialLinkTelegram,
      ariaLabel: "Telegram",
      svgPath: (
        <path
          d="M15 30C23.28 30 30 23.28 30 15C30 6.71 23.28 0 15 0C6.71 0 0 6.71 0 15C0 23.28 6.71 30 15 30ZM6.86 14.67L21.32 9.09C21.99 8.85 22.58 9.26 22.36 10.27L19.9 21.87C19.72 22.7 19.23 22.89 18.54 22.51L14.8 19.74L12.99 21.49C12.79 21.69 12.62 21.85 12.23 21.85L12.5 18.04L19.45 11.76C19.75 11.49 19.38 11.34 18.98 11.61L10.39 17.02L6.69 15.86C5.89 15.61 5.87 15.06 6.86 14.67Z"
          fill="#000000"
        />
      ),
    },
    {
      href: "https://www.instagram.com",
      className: styles.contacts__socialLinkInstagram,
      ariaLabel: "Instagram",
      svgPath: (
        <>
          <path
            d="M0 9.37V20.62C0 25.8 4.19 30 9.37 30H20.62C25.8 30 30 25.8 30 20.62V9.37C30 4.19 25.8 0 20.62 0H9.37C4.19 0 0 4.19 0 9.37ZM20.62 2.81C24.24 2.81 27.18 5.75 27.18 9.37V20.62C27.18 24.24 24.24 27.18 20.62 27.18H9.37C5.75 27.18 2.81 24.24 2.81 20.62V9.37C2.81 5.75 5.75 2.81 9.37 2.81H20.62Z"
            fill="#000000"
          />
          <path
            d="M7.5 15C7.5 19.14 10.85 22.5 15 22.5C19.14 22.5 22.5 19.14 22.5 15C22.5 10.85 19.14 7.5 15 7.5C10.85 7.5 7.5 10.85 7.5 15ZM19.68 15C19.68 17.58 17.58 19.68 15 19.68C12.41 19.68 10.31 17.58 10.31 15C10.31 12.41 12.41 10.31 15 10.31C17.58 10.31 19.68 12.41 19.68 15Z"
            fill="#000000"
          />
          <path
            d="M6.93 5.93C7.48 5.93 7.93 6.38 7.93 6.93C7.93 7.48 7.48 7.93 6.93 7.93C6.38 7.93 5.93 7.48 5.93 6.93C5.93 6.38 6.38 5.93 6.93 5.93Z"
            fill="#000000"
          />
        </>
      ),
    },
  ],
  formFields = {
    name: {
      label: "Ваше имя",
      placeholder: "Иван",
    },
    email: {
      label: "Ваша почта",
    },
    message: {
      label: "Ваше сообщение",
    },
  },
  privacyPolicyText = "Я согласен(а) с",
  privacyPolicyLinkText = "политикой конфиденциальности",
  submitButtonText = "Отправить сообщение",
  apiUrl = "https://jsonplaceholder.typicode.com/posts",
}) => {

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    onPrivacyPolicyClick();
  };
  
  const formRef = useRef(null);
  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const messageErrorRef = useRef(null);
  const privacyErrorRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = formRef.current;
    const name = form.elements.name;
    const email = form.elements.email;
    const message = form.elements.message;
    const privacy = form.elements.privacy;

    // Сбрасываем ошибки
    nameErrorRef.current.style.display = "none";
    emailErrorRef.current.style.display = "none";
    messageErrorRef.current.style.display = "none";
    privacyErrorRef.current.style.display = "none";

    let isValid = true;
    name.value = name.value.trim();

    // Валидация имени
    if (name.value === "") {
      nameErrorRef.current.textContent = "Пожалуйста, введите ваше имя";
      nameErrorRef.current.style.display = "block";
      isValid = false;
    } else if (name.value.length > 20) {
      nameErrorRef.current.textContent = "Имя не должно превышать 20 символов";
      nameErrorRef.current.style.display = "block";
      isValid = false;
    }

    // Валидация email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") {
      emailErrorRef.current.textContent = "Пожалуйста, введите ваш e-mail";
      emailErrorRef.current.style.display = "block";
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      emailErrorRef.current.textContent = "Введите корректный e-mail";
      emailErrorRef.current.style.display = "block";
      isValid = false;
    }

    // Валидация сообщения
    message.value = message.value.trim();
    if (message.value.length > 500) {
      messageErrorRef.current.textContent =
        "Сообщение не должно превышать 500 символов.";
      messageErrorRef.current.style.display = "block";
      isValid = false;
    }

    // Валидация чекбокса
    if (!privacy.checked) {
      privacyErrorRef.current.textContent =
        "Необходимо согласие с политикой конфиденциальности";
      privacyErrorRef.current.style.display = "block";
      isValid = false;
    }

    // Если форма валидна - отправляем
    if (isValid) {
      const formData = {
        name: name.value,
        email: email.value,
        message: message.value || "Пустое сообщение",
      };

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Ответ от сервера:", data);
          alert("Ваша форма успешно отправлена!");
          form.reset();
        })
        .catch((error) => {
          console.error("Ошибка при отправке:", error);
          alert("Ошибка при отправке данных!");
        });
    }
  };

  // Очистка ошибок при вводе
  const clearError = (errorRef) => {
    if (errorRef.current) {
      errorRef.current.style.display = "none";
    }
  };

  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.contacts__content}>
        <div className={styles.contacts__image}>
          <img src={photoAbout} alt="Фото" />
        </div>

        <div className={styles.contacts__description}>
          <div className={styles.iconBg}></div>
          <div className={`${styles.contacts__subtitle} subtitle`}>
            {contactsSubtitle}
          </div>
          <div className={`${styles.contacts__title} title`}>
            {contactsTitle}
          </div>
          <p className={styles.contacts__text}>{contactsText}</p>

          {/* Социальные сети */}
          <div className={styles.contacts__socials}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={link.className}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  {link.svgPath}
                </svg>
              </a>
            ))}
          </div>

          <p className={styles.contacts__text}>{formText}</p>

          {/* Форма для отправки */}
          <form
            className={styles.contacts__form}
            onSubmit={handleSubmit}
            ref={formRef}
            noValidate
          >
            <div className={styles.contacts__formRow}>
              <div className={styles.contacts__formGroup}>
                <label htmlFor="name" className={styles.contacts__label}>
                  {formFields.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.contacts__input}
                  placeholder={formFields.name.placeholder}
                  onChange={() => clearError(nameErrorRef)}
                />
                <div
                  id="name-error"
                  ref={nameErrorRef}
                  className={styles.errorMessage}
                  style={{ display: "none" }}
                ></div>
              </div>

              <div className={styles.contacts__formGroup}>
                <label htmlFor="email" className={styles.contacts__label}>
                  {formFields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.contacts__input}
                  onChange={() => clearError(emailErrorRef)}
                />
                <div
                  id="email-error"
                  ref={emailErrorRef}
                  className={styles.errorMessage}
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>

            <div className={styles.contacts__formGroup}>
              <label htmlFor="message" className={styles.contacts__label}>
                {formFields.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.contacts__input}
                onChange={() => clearError(messageErrorRef)}
              ></textarea>
              <div
                id="message-error"
                ref={messageErrorRef}
                className={styles.errorMessage}
                style={{ display: "none" }}
              ></div>
            </div>

            {/* Чекбокс с политикой конфиденциальности */}
            <div className={styles.contacts__checkBox}>
              <input
                type="checkbox"
                id="privacy-policy"
                name="privacy"
                className={styles.contacts__checkbox}
                onChange={() => clearError(privacyErrorRef)}
              />
              <label
                htmlFor="privacy-policy"
                className={styles.contacts__checkboxLabel}
              >
                {privacyPolicyText}{" "}
                <a href="#" className={styles.contacts__policyLink} onClick={handlePrivacyClick}>
                  {privacyPolicyLinkText}
                </a>
              </label>
              <div
                ref={privacyErrorRef}
                className={styles.errorMessage}
                style={{ display: "none" }}
              ></div>
            </div>

            <button
              className={`${styles.contacts__button} button`}
              type="submit"
            >
              <span>{submitButtonText}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;