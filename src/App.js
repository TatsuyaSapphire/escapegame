import './App.css';
import React from 'react';
import { AllRoutes } from './routes/AllRoutes';
import {Footer} from './pages/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
