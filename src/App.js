import Home from './routes/home/Home'
import NavBar from './routes/navigation/NavBar';
import Shop from './routes/shop/Shop';
import { Routes, Route } from 'react-router-dom'
import SignIn from './routes/sign-in/SignIn';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="sign-in" element={<SignIn/>}/>
        </Route>
      </Routes>
    </div>
  );
}
