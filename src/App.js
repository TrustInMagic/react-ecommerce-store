import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import GameDetails from './components/GameDetails/GameDetails';
import './index.css';

const App = () => {
  const [wishList, setWishList] = React.useState([]);

  const handleWishList = (clickedGame) => {
    setWishList((prevWishList) => {
      if (
        prevWishList.some(
          (iteratedGame) => iteratedGame.name === clickedGame.name
        )
      ) {
        return prevWishList.filter((game) => game.name !== clickedGame.name);
      } else {
        return [clickedGame, ...prevWishList];
      }
    });
  };

  const useCart = () => {
    const [isCartVisible, setCartVisible] = React.useState(false);
    const [cartContent, setCartContent] = React.useState([]);

    const openCart = () => {
      setCartVisible(true);
    };

    const closeCart = () => {
      setCartVisible(false);
    };

    const addToCart = (game) => {
      setCartContent((prevContent) => [
        { name: game.name, price: game.price },
        ...prevContent,
      ]);
    };

    const removeFromCart = (game) => {
      setCartContent((prevContent) =>
        prevContent.filter((iteratedGame) => iteratedGame.name !== game.name)
      );
    };

    return {
      isCartVisible,
      openCart,
      closeCart,
      cartContent,
      addToCart,
      removeFromCart,
    };
  };

  const {
    isCartVisible,
    openCart,
    closeCart,
    cartContent,
    addToCart,
    removeFromCart,
  } = useCart();

  return (
    <div className='app'>
      <Cart
        isCartVisible={isCartVisible}
        closeCart={closeCart}
        content={cartContent}
        removeFromCart={removeFromCart}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Landing
                openCart={openCart}
                cartContent={cartContent}
                isCartVisible={isCartVisible}
                closeCart={closeCart}
              />
            }
          />
          <Route
            path='/store'
            element={
              <Store
                openCart={openCart}
                addToCart={addToCart}
                cartContent={cartContent}
                isCartVisible={isCartVisible}
                closeCart={closeCart}
                wishList={wishList}
                handleWishList={handleWishList}
              />
            }
          />
          <Route
            path='store/games/:gameName'
            element={
              <GameDetails
                openCart={openCart}
                addToCart={addToCart}
                cartContent={cartContent}
                wishList={wishList}
                handleWishList={handleWishList}
                isCartVisible={isCartVisible}
                closeCart={closeCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
