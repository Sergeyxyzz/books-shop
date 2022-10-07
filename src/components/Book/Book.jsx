import style from './Book.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';

const Book = ({ book, searchValue }) => {

  const addToCart = (item) => {
    axios.post('https://633768af5327df4c43d3d917.mockapi.io/cart', item);
    alert('Товар добавлен в корзину')
  };

  return (
    <>
      {book
        .filter((elem) => {
          if (
            elem.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            elem.genre.toLowerCase().includes(searchValue.toLowerCase()) ||
            elem.author.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return true;
          }
          return false;
        })
        .map((elem, id) => {
          return (
            <div className={style.book} key={id}>
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
                  <div className={style.buttons}>
                    <button>
                      <AiOutlinePlus
                        title="Добавить в корзину"
                        className={style.btnCart}
                        onClick={() => addToCart(elem)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Book;
