import React from 'react';

const AdditionalInfo = ({ game }) => {
  const { website, ratings, id, stores } = game;

  return (
    <>
      <div className="flex flex-col gap-5 dark:text-dark-text">
        <div>
          <a href={website} target="_blank" className="font-medium text-cta">
            Official Website
          </a>
        </div>
        <div>
          <h4 className="font-light mb-2">Ratings</h4>
          <div className="flex flex-wrap gap-4 mb-10">
            {ratings?.map((rating) => (
              <div className="flex gap-2">
                <p className="font-medium">{rating.title}</p>
                <p>{rating.percent}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
