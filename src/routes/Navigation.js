import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigates,
} from "react-router-dom";
import { routes } from "./routes";
import { Helmet } from "react-helmet";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              <>
                <Helmet>
                  <title>{route.title}</title>
                </Helmet>
                <route.component />
              </>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};
