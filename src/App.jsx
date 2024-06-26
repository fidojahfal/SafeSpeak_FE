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
import UpdateReportPage from './pages/UpdateReportPage';
import ProtectedRoute from './components/ProtectedRoute';
import ReportPage from './pages/ReportPage';
import CreateArticlePage from './pages/CreateArticlePage';
import UpdateArticlePage from './pages/UpdateArticlePage';

import DetailArticlePage from './pages/DetailArticlePage';
import ArticlePage from './pages/ArticlePage';
import { asyncUnsetUser } from './states/user/action';
function App() {
  const { authUser, isPreload, loadingBar } = useSelector((states) => states);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(asyncIsPreloadProcess());
  }, [dispatch]);

  function onLogoutHandler() {
    dispatch(asyncUnsetAuthUser());
    dispatch(asyncUnsetUser());
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
          <Navigation onLogout={onLogoutHandler} authUser={authUser} />
        </header>
      )}
      <Loading />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage role={authUser ? authUser.role : 0} />}
          />
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
          />
          <Route
            path="/reports/create"
            element={<ProtectedRoute element={<CreateReportPage />} />}
          />
          <Route
            path="/reports/:id/detail"
            element={<ProtectedRoute element={<DetailReportPage />} />}
          />
          <Route
            path="/reports/:id/update"
            element={<ProtectedRoute element={<UpdateReportPage />} />}
          />
          <Route path="/articles" element={<ArticlePage />} />
          <Route
            path="/articles/create"
            element={<ProtectedRoute element={<CreateArticlePage />} />}
          />
          <Route
            path="/articles/:id/update"
            element={<ProtectedRoute element={<UpdateArticlePage />} />}
          />
          <Route path="/articles/:id/detail" element={<DetailArticlePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      {showNavbarFooter && <Footer onLoading={loadingBar.default} />}
    </>
  );
}

export default App;
