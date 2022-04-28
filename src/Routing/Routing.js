import React from 'react';
import { paths } from './Paths';
import Home from 'Pages/Home';
import Projects from 'Pages/Projects';
import { Route, Routes } from 'react-router-dom';
import About from 'Pages/About';

// const Redirection = () => {
//   return <Redirect to={paths.home} />;
// };

const routes = [
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.projects,
    component: Projects,
  },
  {
    path: paths.about,
    component: About,
  },
];

const RenderRoutes = (switchProps = {}) => {
  return (
    <Routes {...switchProps}>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
            redirect={route.redirect}
          />
        );
      })}
    </Routes>
  );
};

export default RenderRoutes;
