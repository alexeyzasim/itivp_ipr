import React from 'react';
import './About.module.css';

const About = ({ imageSrc, subtitle, title, text, items }) => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__image">
          <img src={imageSrc} alt="Фото" />
        </div>
        <div className="about__description">
          <div className="icon-bg"></div>
          <div className="about__subtitle subtitle">{subtitle}</div>
          <div className="about__title title">{title}</div>
          <p className="about__text text">{text}</p>

          <div className="about__grid">
            {items.map((item, index) => (
              <div className="item" key={index}>
                <div className="item__icon">
                  <div className="icon-bg"></div>
                  {item.icon} 
                </div>
                <div className="item__container">
                  <h3 className="item__title">{item.title}</h3>
                  <p className="item__text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
