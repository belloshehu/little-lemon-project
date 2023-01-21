import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';
import PageNotFound from './components/PageNotFound';
import SideBar from './components/SideBar';
import { useGlobalContext } from './lib/context';


function App() {
  const {isOpen} = useGlobalContext()
  console.log(isOpen)
  return (
    <>
      <Header>
        <Nav />
      </Header>
      {isOpen && <SideBar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
