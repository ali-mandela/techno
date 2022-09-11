import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contactus from './components/Contactus';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contactus />}></Route>
      </Routes>

    </div>
  );
}

export default App;
