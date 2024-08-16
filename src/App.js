// import logo from './logo.svg';

import './index.css'
import Nav from './Components/Nav';
import Main from './Components/Main';
import { PaymentContextProvider } from './Context/Paymentcontext';
import { Route, Routes } from 'react-router-dom';
import Payment from './Components/Payment';

function App() {
  return (
    <PaymentContextProvider>
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/payment' element={<Payment/>} />
      </Routes>
      
    </div>
    </PaymentContextProvider>
    
  );
}

export default App;
