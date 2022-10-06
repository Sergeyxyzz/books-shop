import React, { useMemo, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBookmarkHeart } from 'react-icons/bs';
import style from './Header.module.scss';
import { GiBookCover } from 'react-icons/gi';
import { TextField } from '@mui/material';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

const Header = ({ setSearchValue, searchValue, showCart}) => {


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
            {useMemo(() => {
              return (
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
              );
            }, [searchValue, setSearchValue])}
          </li>

          <ul className={style.cart}>
            <li>
              <BsBookmarkHeart className={style.icon} />
            </li>
            <li>
              <AiOutlineShoppingCart className={style.icon} onClick={showCart} style={{cursor: 'pointer'}}/>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Header;
