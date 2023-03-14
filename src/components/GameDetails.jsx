import React from 'react';
import mostPlayed from '../../data/mostPlayed';
import { useParams } from 'react-router';

const GameDetails = () => {
  const { id } = useParams();
  // console.log(mostPlayed);

  return (
    <>
      <div>
        {mostPlayed.map((game) => (
          <div key={game.id}>
            <h5>{game.title}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameDetails;
