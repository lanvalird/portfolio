import App from '../App';

import Home from '../pages/HomePage';
import NotFound from '../pages/NotFoundPage';
import Projects from '../pages/project/ProjectsPage';

import { GoToNotFound } from '../utils';

export default [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'project',
        element: <Projects />,
      },
      {
        path: 'project/*',
        element: <Projects />,
      },
    ],
  },
  {
    path: 'not-found',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <GoToNotFound />,
  },
];
