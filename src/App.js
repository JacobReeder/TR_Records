import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Releases from './components/Releases';



function App() {

  const [categories] = useState([
    {
      name: 'bands',
      description: 'Band album covers',
    },
    { name: '', description: '' },
   
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
         categories={categories}
         setCurrentCategory={setCurrentCategory}
         currentCategory={currentCategory}></Nav>
      <main>
        <div>
        <Releases currentCategory={currentCategory}></Releases>
        <About>
        
        
        </About>
        </div>
      </main>
    </div>
  );
}

export default App;
