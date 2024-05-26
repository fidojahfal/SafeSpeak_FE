import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIsPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Loading from './components/Loading';
import CreateReportPage from './pages/CreateReportPage';
import HomePage from './pages/HomePage';
import Beranda from './pages/Beranda/Mahasiswa';
import Dosen from './pages/Beranda/Dosen';
import AboutPage from './pages/AboutPage';

function App() {
  const { authUser, isPreload } = useSelector((states) => states);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(asyncIsPreloadProcess());
  }, [dispatch]);

  function onLogoutHandler() {
    dispatch(asyncUnsetAuthUser());
  }

  if (isPreload) {
    return null;
  }

  return (
    <>
      {!authUser && (
        <>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </>
      )}
      {authUser && (
        <>
          <header>
            <Navigation onLogout={onLogoutHandler} profile_id={authUser._id} />
          </header>
          <Loading />
          <main>
            <Routes>
              <Route path="/profile/:id/edit" element={<ProfilePage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route
                path="/reports/create"
                element={<CreateReportPage />}
              ></Route>
              {/* Temporary */}
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/beranda" element={<Beranda />} />
              <Route path="/dosen" element={<Dosen />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </>
      )}
    </>
  );
}

export default App;
