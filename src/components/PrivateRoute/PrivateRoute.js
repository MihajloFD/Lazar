import React from 'react';
import { Navigate } from 'react-router-dom';
import { homeURL } from '../../constants/pagesRoute';

export const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={homeURL} replace={true} />
  );
};
