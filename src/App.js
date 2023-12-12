import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from './pages/Default/Default';
import Encrypt from "./pages/Encrypt/Encrypt";
import Decrypt from "./pages/Decrypt/Decrypt";
import NavigationBar from './NavigationBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <NavigationBar />  {/* Include the NavigationBar component */}
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/encrypt" element={<Encrypt />} />
          <Route path="/decrypt" element={<Decrypt />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;