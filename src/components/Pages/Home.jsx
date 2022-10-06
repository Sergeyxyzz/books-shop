import React from 'react';
import Book from '../Book/Book';
import Pagination from '../Pagination/Pagination';

const Home = ({ currentPage, setCurrentPage, book, searchValue }) => {
  return (
    <div className="books">
      {searchValue ? (
        <h1 className="title">
          Поиск книг по всему магазину: <em>{searchValue}</em>
        </h1>
      ) : (
        <h1 className="title">
          Все книги <span className="ofpages">(стр.{currentPage}/9)</span>
        </h1>
      )}

      <div className="books-grid">
        <Book book={book} searchValue={searchValue} />
      </div>

      <div className="pagination">
        {searchValue ? (
          ''
        ) : (
          <Pagination currentPage={currentPage} onChangePage={(number) => setCurrentPage(number)} />
        )}
      </div>
    </div>
  );
};

export default Home;
