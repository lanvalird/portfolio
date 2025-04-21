import App from '../App';

import Home from '../pages/HomePage';
import NotFound from '../pages/NotFoundPage';
import Projects from '../pages/project/ProjectsPage';

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
    path: '*',
    element: <NotFound />,
  },
];
