import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Product from './Product/Product';
import Contact from './ContactUs/Contact';
import Navbar from './assests/Navbar/Navbar';
import 'tachyons'

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
          <Routes>
              <Route path='/' element={< Home/>}></Route>
              <Route path='/about' element={< About/>}></Route>
              <Route path='/product' element={< Product/>}></Route>
              <Route path='/contact' element={< Contact/>}></Route>
          </Routes>
      </Router>
        
    </div>
  );
}

export default App;
