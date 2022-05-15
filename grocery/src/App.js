import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/Footer';
import ProductBanner from './Components/ProductBanner';
import Home from './Components/Home';
function App() {
  return (
    <div>
      <Header></Header>
      <ProductBanner/>
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
