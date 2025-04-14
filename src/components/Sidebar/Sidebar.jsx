import React, { useEffect } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={toggleSidebar}></div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.sidebar__closeBtn} onClick={toggleSidebar}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
        <nav className={styles.sidebar__menu}>
          <ul className={styles.sidebar__list}>
            <li className={styles.sidebar__item}>
              <a href="#about" className={styles.sidebar__link} onClick={toggleSidebar}>Про меня</a>
            </li>
            {/* Остальные пункты меню */}
          </ul>
        </nav>
        <div className={styles.sidebar__socials}>
          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default Sidebar;