import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Service from './components/Service/Service.js';
import Pricing from './components/Pricing/Pricing';
import Statistics from './components/Statistics/statistics';
import Process from './components/Process/Process';
import Testimonial from './components/Testimonials/Testimonial';
import Start from './components/Start/Start';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  // Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Navbar />
          <Home />
          <Service />
          <Pricing />
          <Statistics />
          <Process />
          <Testimonial />
          <Start />
          <Navbar />
          <Start />
          <Footer />
    </div>
  );
}

export default App;
