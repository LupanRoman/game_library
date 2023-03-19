import React from 'react';

const Details = ({ game }) => {
  const {
    genres,
    rating,
    released,
    publishers,
    developers,
    platforms,
    website,
  } = game;

  return (
    <>
      <div className="details-component flex flex-row flex-wrap ">
        <div className=" w-1/2 pr-2 box-border mb-4 font-light">
          <h4>Genre</h4>
          <div className="flex flex-wrap gap-1 font-medium text-sm">
            {genres ? genres.map((genre) => <p>{genre.name},</p>) : ''}
          </div>
        </div>
        <div className="w-1/2 pl-2 box-border mb-4 font-light">
          <h4>Rating</h4>
          <p className='font-medium text-sm'>{rating}</p>
        </div>
        <div className=" w-1/2 pr-2 box-border mb-4 font-light">
          <h4>Released on</h4>
          <p className='font-medium text-sm'>{released}</p>
        </div>
        <div className=" w-1/2 pr-2 box-border mb-4 font-light">
          <h4>Publisher</h4>
          {publishers
            ? publishers.map((publisher) => <p className='font-medium text-sm'>{publisher.name}</p>)
            : ''}
        </div>
        <div className=" w-1/2 pr-2 box-border mb-4 font-light ">
          <h4>Developer</h4>
          <div className='font-medium text-sm'>
            {developers
              ? developers.map((developer) => <p>{developer.name},</p>)
              : ''}
          </div>
        </div>
        <div className=" w-1/2 pr-2 box-border mb-4 font-light">
          <h4>Platforms</h4>
          <div className="flex flex-wrap font-medium text-sm">
            {platforms
              ? platforms.map((plat) => <p>{plat.platform.name},</p>)
              : ''}
          </div>
        </div>
        {/* <div className="w-1/2 flex flex-col gap-5">
          <div>
            <h4>Genre</h4>
            <div className="flex flex-wrap gap-1">
              {genres ? genres.map((genre) => <p>{genre.name},</p>) : ''}
            </div>
          </div>
          <div>
            <h4>Released on</h4>
            <p>{released}</p>
          </div>
          <div>
            <h4>Developer</h4>
            <div>
              {developers
                ? developers.map((developer) => <p>{developer.name}</p>)
                : ''}
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div>
            <h4>Rating</h4>
            <p>{rating}</p>
          </div>
          <div>
            <h4>Publisher</h4>
            {publishers
              ? publishers.map((publisher) => <p>{publisher.name}</p>)
              : ''}
          </div>
          <div>
            <h4>Platforms</h4>
            <div>
              {platforms
                ? platforms.map((plat) => <p>{plat.platform.name}</p>)
                : ''}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Details;
