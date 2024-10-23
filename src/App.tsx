import { Outlet } from "react-router-dom";
import Footer from "./components/essentials/Footer";
import Header from "./components/essentials/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
