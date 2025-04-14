import React from "react";
import Promo from "../components/Promo/Promo";
import About from "../components/About/About";
import { useNavigate } from "react-router-dom";

const ExcursionPage = () => {

  const navigate = useNavigate();
  
  const aboutData = {
    imageSrc: "/images/aboutExcursion1.jpg",
    subtitle: "О нас",
    title: "Что вы увидите на экскурсии?",
    text: "Организуем для вас незабываемые путешествия по всему миру! Хотите расслабиться на белоснежных пляжах, отправиться в захватывающее приключение или открыть для себя новые города и культуры? Мы подберем идеальный тур, учитывая все ваши пожелания.",
    items: [
      {
        title: "Величие горных пейзажей",
        text: "Погрузитесь в мир высоких гор и их величественных вершин.",
      },
      {
        title: "Жизнь на берегах озёр и рек",
        text: "Исследуйте берега кристально чистых озёр и быстрые реки, где жизнь бурлит на каждом шагу.",
      },
      {
        title: "Таинственные леса и их обитатели",
        text: "Пройдитесь по древним лесам, скрывающим множество секретов природы.",
      },
    ],
  };

  const promoData = {
    backgroundImage: "/images/excursion1.jpg", 
    subtitle: "Что это за экскурсия?",
    title: "Экспедиция по природным заповедникам",
    titleColor: "#FFFFFF",
    subtitleColor: "#FFFFFF",
    buttonText: "Забронировать",
    linkHref: "#about",
    onButtonClick: () => navigate('/'),
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
   

  return (
    <>
      <Promo {...promoData} />
      <About {...aboutData} />
    </>
  );
};

export default ExcursionPage;
