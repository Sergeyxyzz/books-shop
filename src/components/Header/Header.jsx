import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import style from './Header.module.scss';
import { GiBookCover } from 'react-icons/gi';
import { TextField } from '@mui/material';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

const Header = ({ items, setSearchValue, searchValue }) => {

  return (
    <>
      <div className={style.navigation}>
        <BurgerMenu />

        <ul className={style.navMenu}>
          <div className={style.information}>
            <GiBookCover className={style.icon} />
            <Link to="/">
              <span className={style.title}>Books-shop 24</span>
            </Link>
          </div>

          <li>
            <TextField
              className={style.searchpanel}
              id="standard-basic"
              label="Поиск"
              variant="standard"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Заглавие, жанр, автор."
            />
          </li>
          <div className={style.contacts}>
            <h4>
              Sergeyxyzz@yandex.ru <hr />
              8-995-509-14-85
            </h4>
          </div>
          <div className={style.cart}>
            <span className={style.itemsLength}>{items.length}</span>
            <Link to="/cart">
              <AiOutlineShoppingCart
                className={style.icon}
                style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
              />
            </Link>
          </div>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Header;
