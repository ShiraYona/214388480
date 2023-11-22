
import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'


function App()
{
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Date />}/>
    </Routes> 
    </BrowserRouter>
   </div>
  );
}

export default App; 
