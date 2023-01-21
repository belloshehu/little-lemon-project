import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>

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
