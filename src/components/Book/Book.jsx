import style from './Book.module.scss';
import { FcLikePlaceholder } from 'react-icons/fc';
import { AiOutlinePlus } from 'react-icons/ai';

const Book = ({ book, searchValue }) => {
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
        .map((elem) => {
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
                  <div className={style.buttons}>
                    <button>
                      <FcLikePlaceholder title="Добавить в избранное" className={style.btnLike} />
                    </button>
                    <button>
                      <AiOutlinePlus title="Добавить в корзину" className={style.btnCart} />
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
