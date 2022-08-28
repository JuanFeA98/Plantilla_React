import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Aside from './components/Aside'

import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Aside/>
        <Routes>
          <Route path='/'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
