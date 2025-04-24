import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ChangeTitle, ScrollToTop } from './utils';

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

export default App;
