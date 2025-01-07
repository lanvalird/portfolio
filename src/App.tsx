import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect } from 'react';

function App() {
  return (
    <>
      <ScrollToTop />
      <ChangeTitle />
      <Header />
      <main className='container mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-6 p-6 sm:flex-row'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const ScrollToTop = () => {
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

const ChangeTitle = () => {
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

export default App;
