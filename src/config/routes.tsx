import App from '../App';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Project from '../pages/Project';

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
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
