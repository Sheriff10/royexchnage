import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './pages/authentication/login';
import { Signup } from './pages/authentication/signup';
import './css/authentication.css'
import './css/global.css'
import './css/components.css'
import './css/home.css'
import { Header } from './pages/global/header';
import { Payment } from './pages/components/users/payment';
import { THistory } from './pages/components/users/t_history';
import { Trade } from './pages/components/users/swap';
import { Home } from './pages/components/home';
import { Footer } from './pages/global/footer';
import Staking from './pages/components/users/staking';
import Dashboard from './pages/components/users/dashboard';
import Investments from './pages/components/users/investments';
import Deposits from './pages/components/users/deposits';
import Withdraw from './pages/components/users/withdraw';
import WithdrawalHistory from './pages/components/users/withdrawal_history';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/auth/signup' element={<Signup />}></Route>
        <Route path='/user/payment' element={<Payment />}></Route>
        <Route path='/user/t/history' element={<THistory />}></Route>
        <Route path='/user/trade' element={<Trade />}></Route>
        <Route path='/user/staking' element={<Staking />} />
        <Route path='/user/dashboard' element={<Dashboard />} />
        <Route path='/user/investments' element={<Investments />} />
        <Route path='/user/deposits' element={<Deposits />} />
        <Route path='/user/withdraw' element={<Withdraw />} />
        <Route path='/user/withdraw-history' element={<WithdrawalHistory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
