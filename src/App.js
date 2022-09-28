import Home from './routes/home/Home'
import NavBar from './routes/navigation/NavBar';
import Shop from './routes/shop/Shop';
import { Routes, Route } from 'react-router-dom'
import Authentication from './routes/authentication/Authentication';
import Checkout from './components/checkout/Checkout';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="auth" element={<Authentication/>}/>
          <Route path="checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </div>
  );
}
