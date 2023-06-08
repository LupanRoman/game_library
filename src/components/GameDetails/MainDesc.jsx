import React, { useState } from 'react';
import ListSelector from '../PersonalSpace/ListSelector';

const MainDesc = ({ game }) => {
  const [showDesc, setShowDesc] = useState(false);
  const { description_raw, name, id } = game;

  // * Using defValue to default to empty string for the substring method
  const defValue = description_raw || '';

  const openListSelector = () => {
    const listSelectorWrapper = document.getElementById('listSelector-wrapper');
    listSelectorWrapper.classList.toggle('active');
  };

  return (
    <>
      <div>
        <div key={id} className="relative flex flex-col">
          <h5 className="font-black text-xl md:text-3xl lg:text-6xl mb-2">
            {name}
          </h5>
          <div className="mb-2">
            <button
              className="py-1 px-2 bg-cta rounded-md font-medium text-sm"
              onClick={openListSelector}
            >
              Add to list
            </button>
          </div>
          <div
            id="listSelector-wrapper"
            className="listSelector-wrapper hidden dark:bg-dark-bg"
          >
            <ListSelector game={game} OpenListSelector={openListSelector} />
          </div>
          <div className="flex flex-col">
            <h4 className="font-black md:text-2xl">About</h4>
            <p className="">
              {showDesc ? defValue : `${defValue.substring(0, 197)}...`}
              <button
                className="text-cta font-medium text-sm"
                onClick={() => setShowDesc(!showDesc)}
              >
                {showDesc ? 'Show Less' : 'Show More'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDesc;
