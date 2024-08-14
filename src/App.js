// import logo from './logo.svg';

import './index.css'
import Nav from './Components/Nav';
import Main from './Components/Main';
import { PaymentContextprovider } from './Context/Paymentcontext';

function App() {
  return (
    <PaymentContextprovider>
    <div className="App">
      <Nav/>
      <Main/>
      
    </div>
    </PaymentContextprovider>
  );
}

export default App;
