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
import Footer from './components/footer/Footer';
import AboutPage from './pages/AboutPage';
import DetailReportPage from './pages/DetailReportPage';
import UpdateReport from './components/reports/UpdateReports';

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
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <header>
          <Navigation onLogout={onLogoutHandler} />
        </header>
      )}
      <Loading />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {authUser && (
            <>
              <Route path="/profile/:id/edit" element={<ProfilePage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route
                path="/reports/create"
                element={<CreateReportPage />}
              ></Route>
              <Route
                path="/reports/detail"
                element={<DetailReportPage />}
              ></Route>
              <Route
                path="/reports/detail/update"
                element={<UpdateReport />}
              ></Route>
            </>
          )}
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Temporary */}
        </Routes>
      </main>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Footer />
      )}
    </>
  );
}

export default App;
