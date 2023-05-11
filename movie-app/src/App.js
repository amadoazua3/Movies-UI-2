import React from 'react';
import './App.css';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
        <Card 
        title='Kimi No Na Wa'
        imageUrl='https://i.pinimg.com/originals/30/a4/65/30a465d7c817d81dcfeeb7c834d9dc1f.jpg'
        body='Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?'
        />
    </div>
  );
}

export default App;
