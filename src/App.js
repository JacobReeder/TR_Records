import React from 'react';
import About from './components/About';
import Nav from './components/Nav';


import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About>
        
        <a
          className="App-link"
          href="https://transylvaniantapes.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Transylvanian Recordings
        </a>
        </About>
      </main>
    </div>
  );
}

export default App;
