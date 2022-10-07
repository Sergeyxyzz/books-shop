import axios from 'axios';
import React, { useEffect } from 'react';
import style from './Cart.module.scss';
import { AiTwotoneDelete } from 'react-icons/ai';

const Cart = ({items, setItems, isLoading, setIsLoading }) => {
  useEffect(() => {
    axios.get('https://633768af5327df4c43d3d917.mockapi.io/cart').then((res) => setItems(res.data));
    setIsLoading(false);
  }, [items]);

  const removeItem = (id) => {
    axios.delete(`https://633768af5327df4c43d3d917.mockapi.io/cart/${id}`);
    const newItem = items.filter((elem) => elem.id !== id);
    setItems(newItem);
  };

  const json = items.map((elem) => elem.price);
  let sum;
  function arraySum(array) {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  arraySum(json);

  if (isLoading) return <h1 style={{ textAlign: 'center', fontSize: '5rem' }}>LOADING...</h1>;

  return (
    <>
      <div className={style.wrapper}>
        <ul className={style.navbar}>
          <li>
            <h1>
              Книг в корзине: {items.length}шт.
              <br />
              На сумму: {sum}руб.
            </h1>
          </li>
          <li></li>
        </ul>

        <h1 className={style.title}>Корзина</h1>
        <div className={style.booksWrapper}>
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
                    <h3 className={style.price}>{elem.price + 'руб.'}</h3>
                    <div className={style.removeBtn}>
                      <AiTwotoneDelete
                        onClick={() => removeItem(elem.id)}
                        className={style.removeIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {sum ? (
          <button className={style.title} style={{ cursor: 'pointer', marginTop: '30px' }}>
            <h1>Оформить заказ</h1>
          </button>
        ) : (
          <h2 className={style.title}>
            <em>Вы еще не добавили товары в корзину.</em>
          </h2>
        )}
      </div>
    </>
  );
};

export default Cart;
