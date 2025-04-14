import React from "react";
import Promo from "../components/Promo/Promo";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Gallery from '../components/Gallery/Gallery';
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  const aboutData = {
    imageSrc: "/images/photo_about.jpg",
    subtitle: "О нас",
    title: "Мы турагентство Тревотур",
    text: "Организуем для вас незабываемые путешествия по всему миру! Хотите расслабиться на белоснежных пляжах, отправиться в захватывающее приключение или открыть для себя новые города и культуры? Мы подберем идеальный тур, учитывая все ваши пожелания.",
    items: [
      {
        title: "Удобное онлайн-бронирование",
        text: "Бронируйте туры прямо на нашем сайте в несколько кликов! Выбирайте направления, отели и экскурсии без необходимости посещать офис.",
      },
      {
        title: "Консультация и поддержка 24/7",
        text: "Наши специалисты всегда на связи – звоните или пишите в мессенджеры в любое время. Мы поможем с выбором тура, документами и любыми вопросами в путешествии.",
      },
      {
        title: "Горящие туры и лучшие направления",
        text: "Следите за актуальными предложениями – мы предлагаем выгодные туры в самые популярные и необычные места по всему миру!",
      },
    ],
  };

  const promoData = {
    backgroundImage: "/images/background.jpg", 
    subtitle: "Мы лучшее турагентство в Минске!",
    title: "Трево-тур",
    buttonText: "Наши экскурсии",
    linkHref: "#about",
    linkText: "О нас",
    onButtonClick: () => navigate('/excursion'),
    socials: [
      {
        href: "https://www.instagram.com",
        className: "socials__social-link--instagram",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.75 0H6.25C2.79 0 0 2.79 0 6.25V13.75C0 17.2 2.79 20 6.25 20H13.75C17.2 20 20 17.2 20 13.75V6.25C20 2.79 17.2 0 13.75 0ZM18.12 13.75C18.12 16.16 16.16 18.12 13.75 18.12H6.25C3.83 18.12 1.87 16.16 1.87 13.75V6.25C1.87 3.83 3.83 1.87 6.25 1.87H13.75C16.16 1.87 18.12 3.83 18.12 6.25V13.75Z"
              fill="#000000"
            />
            <path
              d="M10 5C7.23 5 5 7.23 5 10C5 12.76 7.23 15 10 15C12.76 15 15 12.76 15 10C15 7.23 12.76 5 10 5ZM10 13.12C8.27 13.12 6.87 11.72 6.87 10C6.87 8.27 8.27 6.87 10 6.87C11.72 6.87 13.12 8.27 13.12 10C13.12 11.72 11.72 13.12 10 13.12Z"
              fill="#000000"
            />
            <path
              d="M16.04 4.62C16.04 4.99 15.74 5.29 15.37 5.29C15 5.29 14.7 4.99 14.7 4.62C14.7 4.25 15 3.95 15.37 3.95C15.74 3.95 16.04 4.25 16.04 4.62Z"
              fill="#000000"
            />
          </svg>
        ),
      },
      {
        href: "https://www.facebook.com",
        className: "socials__social-link--facebook",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.07 0H2.92C1.31 0 0 1.31 0 2.92V17.07C0 18.68 1.31 20 2.92 20H8.82V12.92H6.48V9.41H8.82V7.03C8.82 5.09 10.4 3.51 12.34 3.51H15.89V7.03H12.34V9.41H15.89L15.31 12.92H12.34V20H17.07C18.68 20 20 18.68 20 17.07V2.92C20 1.31 18.68 0 17.07 0Z"
              fill="#000000"
            />
          </svg>
        ),
      },
    ],
  };

  const contactsData = {
    photoAbout: "/images/plane.jpg",
    contactsTitle: "Свяжитесь с нами",
    contactsSubtitle: "Контакты",
    contactsText: "Любым удобным для Вас способом:",
    formText: "Или оставьте ваши данные, и мы сами вам напишем:",
    socialLinks: [
      {
        href: "https://www.facebook.com",
        className: "contacts__socialLinkFacebook",
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
        className: "contacts__socialLinkTelegram",
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
        className: "contacts__socialLinkInstagram",
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
    formFields: {
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
    privacyPolicyText: "Я согласен(а) с",
    privacyPolicyLinkText: "политикой конфиденциальности",
    onPrivacyPolicyClick: () => navigate('/PrivacyPolicy'),
    submitButtonText: "Отправить сообщение",
    apiUrl: "https://jsonplaceholder.typicode.com/posts",
  };
    

  return (
    <>
      <Promo {...promoData} />
      <About {...aboutData} />
      <Gallery />
      <Contacts {...contactsData} />
    </>
  );
};

export default HomePage;
