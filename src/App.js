// import React, {useState} from 'react';
import Card from './Card/Card';
// import Button from './Button';
import WelcomeNotif from './WelcomeNotif';

function App() {

  return (
    <>
      <WelcomeNotif username="Simon"/>
      <Card name={"Fadhil"} hobby={"Mancing"} age={34}/>
      <Card name={"Deni"} hobby={"Membaca"} age={"25"}/>
    </>
  );
}

export default App;