
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Login2fa from './Components/Login-2fa';
import ConfirmEmail from './Components/ConfirmEmail';
import Register1 from './Components/Register1';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/login-2fa' element={<Login2fa/>}/>
  <Route path='/confirm-email' element={<ConfirmEmail/>}/>
  <Route path='/register1' element={<Register1/>}/>
 
 
 
</Routes>

</BrowserRouter>

    </>
  );
}

export default App;
