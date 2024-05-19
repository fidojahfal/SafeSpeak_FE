import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIsPreloadProcess } from './states/isPreload/action';

function App() {
  const { authUser, isPreload } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncIsPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/:id/edit" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
