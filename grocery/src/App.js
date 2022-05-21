import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/header';
import Footer from './Components/Footer';
import ProductBanner from './Components/ProductBanner';
import Home from './Components/Home';
import Feedback from './Components/Feedback';
import Contactus from './Components/Contactus';
import Aboutus from './Components/Aboutus';
import FouroFourPage from './Components/404Page';
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
          <Route path='*' element={<FouroFourPage/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
