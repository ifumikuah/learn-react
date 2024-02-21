// import React, {useState} from 'react';
import Card from './Card/Card';
// import Button from './Button';
import WelcomeNotif from './WelcomeNotif';
import List from './List';

function App() {
  const fruits = 
  [{
    name: "Avocado",
    value: 240
  },
  {
    name: "Banana",
    value: 105
  },
  {
    name: "Apple",
    value: 95
  }];

  const fruits2 = 
  [{
    name: "Orange",
    value: 62
  },
  {
    name: "Mango",
    value: 60
  },
  {
    name: "Pineapple",
    value: 86
  }]
  
  return (
    <>
      <List items={fruits} category="Fruits"/>
      <List items={fruits2}/>
    </>
  );
}

export default App;