import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../auth/firebase';
import TopBanner from './TopBanner';
import MostPlayed from './MostPlayed';
import { useStateContext } from '../../context/StateContext';
import Layout from './Layout/Layout';

const Home = () => {
  const { getData, games } = useStateContext();
  const [user, loading] = useAuthState(app);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    console.log(games);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  return (
    <>
      <Layout>
        <div className="home-component lg:px-20 relative">
          <div className="grid-layout">
            <TopBanner />
            <MostPlayed />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
