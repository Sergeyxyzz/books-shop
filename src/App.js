import './App.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import GenrePage from './components/Pages/GenrePage';
import Cart from './components/Pages/Cart/Cart';
import NotFound from './components/Pages/NotFound';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  let db;

  const [cart, setCart] = useState(false);
  const showCart = () => {
    setCart(!cart);
  };

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
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        cart={cart}
        setCart={setCart}
        showCart={showCart}
        items={items}
      />
      <Routes>
        <Route path="*" element={<NotFound />} />
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
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              showCart={showCart}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              items={items}
              setItems={setItems}
            />
          }
        />

        <Route
          path="/drama"
          element={<GenrePage searchValue={searchValue} genreTitle={'Драма'} />}
        />

        <Route
          path="/adventure"
          element={<GenrePage searchValue={searchValue} genreTitle={'Приключения'} />}
        />

        <Route
          path="/history"
          element={<GenrePage searchValue={searchValue} genreTitle={'История'} />}
        />

        <Route
          path="/philosophy"
          element={<GenrePage searchValue={searchValue} genreTitle={'Философия'} />}
        />

        <Route
          path="/programming"
          element={<GenrePage searchValue={searchValue} genreTitle={'Программирование'} />}
        />
      </Routes>
    </div>
  );
}

export default App;
