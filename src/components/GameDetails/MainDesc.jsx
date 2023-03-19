import React, { useState } from 'react';

const MainDesc = ({ game }) => {
  const [showDesc, setShowDesc] = useState(false);
  const { description_raw, name, id } = game;

  // * Using defValue to default to empty string to be able to use the substring method
  const defValue = description_raw || '';

  return (
    <>
      <div>
        <div key={id} className="flex flex-col">
          <h5 className="font-black text-xl md:text-3xl lg:text-4xl mb-5">{name}</h5>
          <div className="flex flex-col">
            <p className="">
              {showDesc ? defValue : `${defValue.substring(0, 197)}...`}
              <button
                className="text-cta font-medium text-sm ml-2"
                onClick={() => setShowDesc(!showDesc)}
              >
                {showDesc ? 'Show Less' : 'Show More'}
              </button>
            </p>
          </div>
          {console.log(game)}
        </div>
      </div>
    </>
  );
};

export default MainDesc;
