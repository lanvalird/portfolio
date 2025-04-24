import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

export const ChangeTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/');
    if (path.length >= 1 && path[1] !== '')
      document.title = `@${import.meta.env.VITE_GITHUB_PROFILE_NAME} – ${
        path[1] === 'project' && 'мои проекты' + (path[2] !== undefined ? ` (#${path[2]})` : '')
      }`;
    else document.title = '◊ lanvalird • Valentin Bird ◊';
  }, [location.pathname]);

  return null;
};

export const GoToNotFound = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav('/not-found', { replace: true });
  }, [nav]);

  return null;
};
