import axios from 'axios';
import React, { useEffect } from 'react';
import style from './Cart.module.scss';
import { useState } from 'react';
import { CgCloseR } from 'react-icons/cg';

const Cart = ({ showCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://633768af5327df4c43d3d917.mockapi.io/cart').then((res) => setItems(res.data));
  }, []);

  const removeItem = (id) => {
    axios.delete(`https://633768af5327df4c43d3d917.mockapi.io/cart/${id}`);
    const newItem = items.filter((elem) => elem.id !== id);
    setItems(newItem);
  };

  const json = items.map((elem) => elem.price);

  let sum

  function arraySum(array) {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum
  }
  arraySum(json);

  return (
    <div className={style.wrapper}>
      <h1>Книг в корзине: {items.length}</h1>
      <h1>На сумму: {sum}</h1>
      <CgCloseR onClick={() => showCart()} className={style.closeIcon} />
      <h1 className={style.title}>Корзина</h1>
      {items.map((elem) => {
        return (
          <div className={style.book} key={elem.id}>
            <div>
              <img src={elem.image} alt={elem.title} title={elem.title} />
            </div>
            <div className={style.bookcontent}>
              <h3 className={style.title}>{elem.title}</h3>
              <div className={style.undertitle}>
                <ul>
                  <li>{elem.genre}</li>
                  <li>{elem.author}</li>
                </ul>
                <h3 className={style.price}>{Number(elem.price) + 'руб.'}</h3>
              </div>
            </div>
            <button onClick={() => removeItem(elem.id)}>DELELTE</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
