import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './pages/authentication/login';
import { Signup } from './pages/authentication/signup';
import './css/authentication.css'
import './css/global.css'
import './css/components.css'
import './css/home.css'
import { Header } from './pages/global/header';
import { Payment } from './pages/components/payment';
import { THistory } from './pages/components/t_history';
import { Trade } from './pages/components/swap';
import { Home } from './pages/components/home';
import { Footer } from './pages/global/footer';
import Staking from './pages/components/staking';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/t/history' element={<THistory />}></Route>
        <Route path='/trade' element={<Trade />}></Route>
        <Route path='/staking' element={<Staking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
