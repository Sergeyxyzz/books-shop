import './App.scss';
import Book from './components/Book/Book';
import Pagination from './components/Pagination/Pagination';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [book, setBook] = useState([]);
  let db;

  useEffect(() => {
    axios.get(db).then((res) => setBook(res.data));
    if (searchValue) {
      db = `https://633768af5327df4c43d3d917.mockapi.io/Book?search=${searchValue}&page=1&limit=50`;
      axios.get(db).then((res) => setBook(res.data));
    } else {
      db = `https://633768af5327df4c43d3d917.mockapi.io/Book?search=${searchValue}&page=${currentPage}&limit=6`;
      axios.get(db).then((res) => setBook(res.data));
    }
  }, [currentPage, searchValue]);

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
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
    </div>
  );
}

export default App;
