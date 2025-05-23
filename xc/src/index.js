import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import About from './pages/About';
import Home from './pages/Home';
import PastEvents from './pages/PastEvents';
import Schedule from './pages/Schedule';
import ClubRecords from './pages/ClubRecords';
import ContactUs from './pages/ContactUs';
import Nopage from './pages/Nopage';


function App(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pastevents" element={<PastEvents />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="clubrecords" element={<ClubRecords />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
