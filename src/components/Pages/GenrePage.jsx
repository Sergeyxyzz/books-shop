import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import axios from 'axios';

const GenrePage = ({ searchValue, genreTitle }) => {
  const [db, setDb] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://633768af5327df4c43d3d917.mockapi.io/Book?genre=${genreTitle}`)
      .then((res) => setDb(res.data));
      setIsLoading(false)
  }, [genreTitle]);

  if (isLoading) return <h1 style={{ textAlign: 'center', fontSize: '5rem' }}>LOADING...</h1>;

  return (
    <div className="books">
      {searchValue ? (
        <h1 className="title" style={{ margin: '1em' }}>
          Поиск книги в разделе {genreTitle}: <em>{searchValue}</em>
        </h1>
      ) : (
        <h1 className="title" style={{ margin: '1em' }}>
          {genreTitle}
        </h1>
      )}

      <div className="books-grid" style={{ marginBottom: '20px' }}>
        <Book book={db} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default GenrePage;
