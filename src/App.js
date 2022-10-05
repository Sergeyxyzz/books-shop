import './App.scss';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import GenrePage from './components/Pages/GenrePage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [book, setBook] = useState([]);

  const [dramaBooks, setDramaBooks] = useState([]);
  const [adventureBooks, setAdventureBooks] = useState([]);
  const [historyBooks, setHistoryBooks] = useState([]);
  const [philosophyBooks, setPhilosophyBooks] = useState([]);
  const [programmingBooks, setProgrammingBooks] = useState([]);

  let db;

  // get genres
  useEffect(() => {
    axios
      .get('https://633768af5327df4c43d3d917.mockapi.io/Book?genre=драма')
      .then((res) => setDramaBooks(res.data));

    axios
      .get('https://633768af5327df4c43d3d917.mockapi.io/Book?genre=приключения')
      .then((res) => setAdventureBooks(res.data));

    axios
      .get('https://633768af5327df4c43d3d917.mockapi.io/Book?genre=история')
      .then((res) => setHistoryBooks(res.data));

    axios
      .get('https://633768af5327df4c43d3d917.mockapi.io/Book?genre=философия')
      .then((res) => setPhilosophyBooks(res.data));

    axios
      .get('https://633768af5327df4c43d3d917.mockapi.io/Book?genre=программирование')
      .then((res) => setProgrammingBooks(res.data));
  }, []);
  // take it

  // get home page all genres
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
  // take it

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              book={book}
              searchValue={searchValue}
            />
          }
        />

        <Route
          path="/drama"
          element={
            <GenrePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              book={dramaBooks}
              searchValue={searchValue}
              genreTitle={'Драма'}
            />
          }
        />

        <Route
          path="/adventure"
          element={
            <GenrePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              book={adventureBooks}
              searchValue={searchValue}
              genreTitle={'Приключения'}
            />
          }
        />

        <Route
          path="/history"
          element={
            <GenrePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              book={historyBooks}
              searchValue={searchValue}
              genreTitle={'История'}
            />
          }
        />

        <Route
          path="/philosophy"
          element={
            <GenrePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              book={philosophyBooks}
              searchValue={searchValue}
              genreTitle={'Философия'}
            />
          }
        />

        <Route
          path="/programming"
          element={
            <GenrePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              book={programmingBooks}
              searchValue={searchValue}
              genreTitle={'Программирование'}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
