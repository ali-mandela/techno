import { Route, Routes } from 'react-router-dom'
import './App.css';
import ApplicationManagement from './Pages/ApplicationManagement'
import About from './Pages/About'
import Cybersecurity from './Pages/Cybersecurity'
import Home from './Pages/Home'
import ERP from './Pages/ERP'
import Networking from './Pages/Networking'
import Zoho from './Pages/zoho'
import Contactus from './Pages/Contactus'
import Dataanalytics from './Pages/Dataanalytics';
import CI from './Pages/CI'
import Amparagraph from './Component/amParagraph';   

function App() {
  return (<>  
      <Routes> 
      <Route path='/' element={<Home />}></Route> 
       <Route path='/Application' element={<ApplicationManagement/>}/> 
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contactus />}></Route>
        <Route path="/Networking"  element={<Networking/>}/>
        <Route path='/ERP' element={<ERP/>}/>
        <Route path='/zoho' element={<Zoho/>}  />
        <Route path='/Cyber' element={ <Cybersecurity/>} />
        <Route path='/DA' element={ <Dataanalytics/>} /> 
        <Route path='/CloudIntergration' element={<CI/>}/>
        <Route path='/eror' element={<Amparagraph/>}/>  

   </Routes>  
  </>

  );
}

export default App;
    
    