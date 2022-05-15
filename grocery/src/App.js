import './App.css';
import Header from './Components/header';
import Footer from './Components/Footer';
import ProductBanner from './Components/ProductBanner';
import Home from './Components/Home';
import Feedback from './Components/Feedback';
function App() {
  return (
    <div>
      <Header></Header>
      <ProductBanner/>
      <Home></Home>
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
