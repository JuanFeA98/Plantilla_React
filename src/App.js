import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Aside from './components/Aside'
import Main from './components/Main'

import Home from './pages/Home'
import Prueba from './pages/base'


import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prueba' element={<Prueba/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
