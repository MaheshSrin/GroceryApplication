import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/Footer';
import ProductBanner from './Components/ProductBanner';
function App() {
  return (
    <div>
      <Header></Header>
      <ProductBanner/>
      <Footer />
    </div>
  );
}

export default App;
