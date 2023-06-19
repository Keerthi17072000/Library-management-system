import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './bookreg';
import {Routes, Route} from "react-router-dom"
import Login from './booklogin';
import Home from './bookhome';

function App() {
 return(
  <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/booklogin' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
 );
}

export default App;
