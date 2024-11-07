import { Outlet } from 'react-router-dom';
import Footer from './components/essentials/Footer';
import Header from './components/essentials/Header';

function App() {
  return (
    <>
      <Header />
      <main className='container mx-auto flex max-w-7xl flex-col items-start justify-center gap-6 p-6 sm:flex-row'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
