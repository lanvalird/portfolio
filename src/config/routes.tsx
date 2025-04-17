import App from '../App';

import Home from '../pages/HomePage';
import NotFound from '../pages/NotFoundPage';
import Project from '../pages/ProjectPage';

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
        element: <Project />,
      },
      {
        path: 'project/*',
        element: <Project />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
