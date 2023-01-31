import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchMishions } from './redux/missions/missions';
import Layout from './components/layout/Layout';
import RocketsPage from './pages/RocketsPage';
import MissionsPage from './pages/MissionsPage';
import MyProfilePage from './pages/MyProfilePage';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMishions());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<MyProfilePage />} />
      </Routes>
    </Layout>
  );
};
export default App;
