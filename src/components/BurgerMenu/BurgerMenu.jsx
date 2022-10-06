import React, { useState } from 'react';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div className={'burger-menu'} onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <div className="ul-menu">
          <div className="link">
            <Link to="/" onClick={updateMenu}>
              <h3>Все книги</h3>
            </Link>
          </div>
          <div className="link">
            <Link to="/drama" onClick={updateMenu}>
              <h3>Драма</h3>
            </Link>
          </div>
          <div className="link">
            <Link to="/adventure" onClick={updateMenu}>
              <h3>Приключения</h3>
            </Link>
          </div>
          <div className="link">
            <Link to="/history" onClick={updateMenu}>
              <h3>История</h3>
            </Link>
          </div>
          <div className="link">
            <Link to="/philosophy" onClick={updateMenu}>
              <h3>Философия</h3>
            </Link>
          </div>
          <div className="link">
            <Link to="/programming" onClick={updateMenu}>
              <h3>Программирование</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
