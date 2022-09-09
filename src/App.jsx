import './App.css';
import Cart from './components/cart';
import Navbar from './components/navbar';
import Products from './components/products';

function App() {
  return (
    <>
      <div className="fondo">
        <h1>MANN.CO</h1>
        <Navbar />
        <Cart />
      </div>
      <Products name="llave" type="utilidad" prize="100" description="Abre cajas" />
      <Products name="caja" type="utilidad" prize="30" description="caja" />
    </>
  );
}

export default App;
