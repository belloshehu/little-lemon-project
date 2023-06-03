import React, { useReducer } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BookingPage from "./pages/BookingPage/index.";
import PageNotFound from "./components/PageNotFound";
import Sidebar from "./components/Sidebar";
import { useGlobalContext } from "./lib/context";
import Wait from "./components/Wait";
import { useEffect } from "react";
import updateTimes from "./lib/reducer";
import { fetchAPI } from "./api";

// const initializeTimes = () => {
//   const today = new Date().toLocaleDateString();
//   const slots = fetchAPI(today);
//   console.log(slots);
//   return slots;
// };
const HomePage = React.lazy(() => import("./pages/HomePage"));
function App() {
  const { isOpen, closeNav } = useGlobalContext();
  // const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Header>
        <Nav />
      </Header>
      {isOpen && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Wait />}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
