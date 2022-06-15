import React, {useState} from 'react';
import './App.css';
import Button from './Components/UI/Button/Button';

function App() {
  const [btnClicked, setBtnClicked]= useState(false);

  const onClickHandler = ()=>{
    setBtnClicked((prevShow)=>!prevShow);

  }
  

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {btnClicked && <p>This is new!</p>}
      <Button onClick = {onClickHandler}>Show paragraph! </Button>
    </div>
  );
}

export default App;
