import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contactus from './components/Contactus';
import ERP from './components/ERP';
import Zoho from './components/zoho';
// import Header from './components/Header';
import Home from './components/Home';
import Networking from './components/Networking';

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contactus />}></Route>
        <Route path="/Networking"  element={<Networking/>}/>
        <Route path='/ERP' element={<ERP/>}/>
        <Route path='/zoho' element={<Zoho/>}  />
      </Routes>

    </div>
  );
}

export default App;
