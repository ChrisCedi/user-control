import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
              <HelmetProvider>
                <Helmet>
                  <title>{route.title}</title>
                </Helmet>
                <route.layout>
                  <route.component />
                </route.layout>
              </HelmetProvider>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};
