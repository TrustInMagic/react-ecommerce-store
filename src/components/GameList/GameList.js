// import React from 'react';
// import GameCard from '../GameCard/GameCard';
// import FilterError from '../FilterError/FilterError';
// import styles from './GameList.module.css';

// const GameList = ({ games, wishList, handleWishList, error }) => {
//   const [display, setDisplay] = React.useState('grid');

//   return (
//     <div
//       className={
//         display === 'grid'
//           ? styles['grid-collection']
//           : styles['row-collection']
//       }
//     >
//       {typeof displayedGames === 'object' ? (
//         games.map((game) => (
//           <GameCard
//             game={game}
//             key={game.name}
//             handleWishList={handleWishList}
//             isLiked={wishList.some(
//               (iteratedGame) => iteratedGame.name === game.name
//             )}
//           />
//         ))
//       ) : (
//         <FilterError error={error} />
//       )}
//     </div>
//   );
// };

// export default GameList;
