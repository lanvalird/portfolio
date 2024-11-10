import App from '../App';

import Blog from '../pages/BlogPage';
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
        path: 'project/:id',
        element: <Project />,
      },
      {
        path: 'Blog/:id',
        element: <Blog />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
