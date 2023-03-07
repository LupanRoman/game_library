import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../auth/firebase';

const Home = () => {
  const [user, loading] = useAuthState(app);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });
  return (
    <>
      <div>
        <h1>Welcome Home</h1>
      </div>
    </>
  );
};

export default Home;
