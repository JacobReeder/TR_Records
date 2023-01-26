import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';



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
        <Gallery currentCategory={currentCategory}></Gallery>
        <About>
        
        </About>
      </main>
    </div>
  );
}

export default App;
