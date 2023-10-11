import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ScrollTop } from "../../ScrollToTop";
import { IRoute } from "../router";

import AuthGuard from "./AuthGuard";
import Login from "../../components/Login";
import Main from "../../components/Main";
import AppLayout from "../../pages/AppLayout";
import PrivateLayout from "../../pages/PrivateLayout";
import UnauthorizedGuard from "./UnauthorizedGuard";

export const privateRoutes: IRoute[] = [
  {
    path: "main",
    element: <Main />,
  },
];

export const authRoutes: IRoute[] = [
  {
    path: "",
    element: <Login />,
  },
];

const AppRouter: FC = () => {
  return (
    <ScrollTop>
      <Routes>
        <Route element={<UnauthorizedGuard />}>
          <Route path="/*" element={<AppLayout />}>
            {authRoutes.map((route, index) => (
              <Route key={`${route.path}${index}`} {...route} />
            ))}
            <Route path="*" element={<Navigate to={`/main`} replace />} />
          </Route>
        </Route>

        <Route element={<AuthGuard />}>
          <Route path="/*" element={<PrivateLayout />}>
            {privateRoutes.map((route, index) => (
              <Route key={`${route.path}${index}`} {...route} />
            ))}
            <Route path="*" element={<Navigate to={""} replace />} />
          </Route>
        </Route>
      </Routes>
    </ScrollTop>
  );
};

export default AppRouter;
