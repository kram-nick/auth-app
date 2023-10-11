import React, { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface IProtectedRouteProps {
  path?: string;
  element?: React.ReactElement;
}

const UnauthorizedGuard: FC<IProtectedRouteProps> = (props) => {
  const location = useLocation();

  const hasToken = !!localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);

  const isUserAuthorized = hasToken ? false : true;

  if (!isUserAuthorized) {
    return <Navigate to="/main" replace state={{ from: location }} />;
  }
  return <Outlet />;
};
export default UnauthorizedGuard;
