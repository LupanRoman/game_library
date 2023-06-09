import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../auth/firebase';
import MostPlayed from './MostPlayed';
import { useStateContext } from '../../context/StateContext';
import Layout from './Layout/Layout';

const Home = () => {
  const { getData } = useStateContext();
  const [user] = useAuthState(app);
  const navigate = useNavigate();

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  return (
    <>
      <Layout>
        <div className="home-component lg:px-5 relative">
          <div className="grid-layout">
            <MostPlayed />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
