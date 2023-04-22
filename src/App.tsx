import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import { Main } from './components/main';
import { About } from './components/about';
import { Contacts } from './components/contacts';
import { Experience } from './components/experience';
import { Cases } from './components/cases';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cases" element={<Cases />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
