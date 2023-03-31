import React from 'react';
import Layout from '../Layout/Layout';
import Code from '../../../public/code.svg';

const PersSpace = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full relative">
          <h1 className="font-black text-xl md:text-4xl pb-5 dark:text-dark-text">
            Personal Space
          </h1>
          <div className="flex gap-4 text-lg flex-wrap font-medium dark:text-dark-text">
            <h4 className=" cursor-pointer active:text-cta">All</h4>
            <h4 className=" cursor-pointer active:text-cta">Completed</h4>
            <h4 className=" cursor-pointer active:text-cta">Played</h4>
            <h4 className=" cursor-pointer active:text-cta">Must play</h4>
          </div>
          <div className="bg-gray-300 flex flex-col items-center py-10 rounded-lg gap-5 mt-20">
            <p className="font-black ">Working on this feature</p>
            <img src={Code} alt="" width={150} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PersSpace;
