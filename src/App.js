import './App.css';
import 'tachyons'
import 'animate.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Product from './Product/Product';
import Contact from './ContactUs/Contact';
import Navbar from './assests/Navbar/Navbar';
import Footer from './assests/Footer/Footer';
//import 404 from './Home/404'

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
              {/* <Route path="*" element={<Home/>}></Route> */}
          </Routes>
      </Router>
      <Footer />
        
    </div>
  );
}

export default App;
