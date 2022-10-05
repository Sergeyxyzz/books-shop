import React from 'react';
import Book from '../Book/Book';

const GenrePage = ({book, searchValue, genreTitle}) => {
  return (
    <div className="books">
      <h1 className="title">
        {genreTitle}
      </h1>
      <div className="books-grid" style={{marginBottom: '20px'}}>
        <Book book={book} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default GenrePage