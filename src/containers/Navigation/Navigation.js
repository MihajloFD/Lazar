import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors/product/appSelector';

import { Login } from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';

import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';
import { homeURL, profileURL } from '../../constants/pagesRoute';
import { NotFound } from '../../components/PageNotFound/PageNotFound';

export const Navigation = () => {
  const isAuthenticated = useSelector(authSelector).user
  return (
    <Router>
      <Routes>
        <Route path={homeURL} element={<Login />} />
        <Route path={profileURL}
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              >
              <Profile />
            </PrivateRoute>}
        />
        {/* this is default page if app didnt find route */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}
