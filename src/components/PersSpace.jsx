import React, { useState } from 'react';
import Layout from './Layout/Layout';
import gameList from '../../data/gameList';
import ListView from './PersonalSpace/ListView';

const PersSpace = () => {
  const [listId, setListId] = useState(0);
  const [listName, setListName] = useState();
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full relative">
          <h1 className="font-black text-xl md:text-4xl pb-5 dark:text-dark-text">
            Personal Space
          </h1>
          <div className="flex gap-4 text-lg flex-wrap font-medium dark:text-dark-text">
            {gameList.map((list) => (
              <h4
                onClick={() => {
                  setListId(list.id);
                  setListName(list.title);
                }}
                className=" cursor-pointer active:text-cta active:font-black "
              >
                {list.title}
              </h4>
            ))}
          </div>
          <h4 className="font-black text-cta text-3xl pt-5 ">{listName}</h4>
          <div id="gameList-container" className="gameList-container">
            <ListView ListId={listId} ListName={listName} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PersSpace;
