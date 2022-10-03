import React, { useMemo } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBookmarkHeart } from 'react-icons/bs';
import style from './Header.module.scss';
import { GiBookCover } from 'react-icons/gi';
import { TextField } from '@mui/material';

const Header = ({ setSearchValue, searchValue }) => {
  return (
    <>
      <nav className={style.navigation}>
        <ul className={style.navMenu}>
          <div className={style.information}>
            <GiBookCover className={style.icon} />
            <span className={style.title}>Books-shop 24</span>
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
          <li>О нас</li>

          <ul className={style.cart}>
            <li>
              <BsBookmarkHeart className={style.icon} />
            </li>
            <li>
              <AiOutlineShoppingCart className={style.icon} />
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Header;
