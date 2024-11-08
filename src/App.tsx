import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect } from 'react';

function App() {
  return (
    <>
      <ScrollToTop />
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

export default App;
