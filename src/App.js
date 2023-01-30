import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import RocketsPage from "./pages/RocketsPage";
import MissionsPage from "./pages/MissionsPage";
import MyProfilePage from "./pages/MyProfilePage";
import "./App.css";
const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<RocketsPage />} />
      <Route path="/missions" element={<MissionsPage />} />
      <Route path="/profile" element={<MyProfilePage />} />
    </Routes>
  </Layout>
);
export default App;
