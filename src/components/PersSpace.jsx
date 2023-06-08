import React from 'react';
import Layout from './Layout/Layout';
import gameList from '../../data/gameList';

const PersSpace = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full relative">
          <h1 className="font-black text-xl md:text-4xl pb-5 dark:text-dark-text">
            Personal Space
          </h1>
          <div className="flex gap-4 text-lg flex-wrap font-medium dark:text-dark-text">
            {gameList.map((list) => (
              <h4 className=" cursor-pointer active:text-cta">{list.title}</h4>
            ))}
          </div>
          <div id="gameList-container" className="gameList-container"></div>
        </div>
      </Layout>
    </>
  );
};

export default PersSpace;
