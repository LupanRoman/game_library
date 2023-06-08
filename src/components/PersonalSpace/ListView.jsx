import React from 'react';
import GameCard from '../GameCard';
import { useStateContext } from '../../../context/StateContext';

const ListView = () => {
  return (
    <>
      <div className="listView-component">
        {/* {listOfGames.map((game) => (
          <>
            <h4>{game.name}</h4>
          </>
        ))} */}
      </div>
    </>
  );
};

export default ListView;
