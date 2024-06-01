import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import ProtectedRoute from './components/ProtectedRoute';
import ReportPage from './pages/ReportPage';

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

  const location = useLocation();

  const showNavbarFooter = !(
    location.pathname.includes('/login') ||
    location.pathname.includes('/register')
  );

  if (isPreload) {
    return null;
  }

  return (
    <>
      {showNavbarFooter && (
        <header>
          <Navigation
            onLogout={onLogoutHandler}
            profile_id={authUser ? authUser._id : null}
          />
        </header>
      )}
      <Loading />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/profile/:id/edit"
            element={<ProtectedRoute element={<ProfilePage />} />}
          />
          <Route
            path="/profile/:id"
            element={<ProtectedRoute element={<ProfilePage />} />}
          />
          <Route
            path="/reports"
            element={<ProtectedRoute element={<ReportPage />} />}
          ></Route>
          <Route
            path="/reports/create"
            element={<ProtectedRoute element={<CreateReportPage />} />}
          ></Route>
          <Route
            path="/reports/:id/detail"
            element={<ProtectedRoute element={<DetailReportPage />} />}
          ></Route>
          <Route
            path="/reports/:id/update"
            element={<ProtectedRoute element={<UpdateReport />} />}
          ></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      {showNavbarFooter && <Footer />}
    </>
  );
}

export default App;
