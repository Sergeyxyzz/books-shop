import React from 'react';
import Book from '../Book/Book';
import Pagination from '../Pagination/Pagination';

const Home = ({currentPage, setCurrentPage, book, searchValue}) => {
  return (
    <div className="books">
      <h1 className="title">
        Все книги <span className="ofpages">(стр.{currentPage}/9)</span>
      </h1>

      <div className="books-grid">
        <Book book={book} searchValue={searchValue} />
      </div>
      <div className="pagination">
        <Pagination currentPage={currentPage} onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
};

export default Home;
