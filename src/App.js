import React from 'react';
import './App.css';
import Card from './component/card.component';

function App() {
  return (
    <div className="App">
      <Card cardTitle="Hello" cardBody="React Component"  cardFooter="react-assignment2" />
    </div>
  );
}

export default App;
