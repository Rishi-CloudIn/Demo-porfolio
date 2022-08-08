import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Service from './components/Service/Service.js';
import Pricing from './components/Pricing/Pricing';
import Statistics from './components/Statistics/statistics';
import Process from './components/Process/Process';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      <Pricing />
      <Statistics />
      <Process />
    </div>
  );
}

export default App;
