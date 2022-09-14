import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './containers/Products';

function App() {
  return (
    <>
      <div className="fondo">
        <h1>MANN.CO</h1>
        <Navbar />
        <Cart />
      </div>
      <Products />
    </>
  )
}

export default App;
