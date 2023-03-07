import React from 'react'
import { useEffect,useState } from 'react';
import CharacterList from './components/characterList';

function App() {
  return <div className='bg-dark text-white'>
    <h1 className='text-center'>Rick and morty</h1>
    <CharacterList/>    
  </div>;      
  
}

export default App
