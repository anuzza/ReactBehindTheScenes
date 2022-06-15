import React, {useState} from 'react';
import './App.css';
import DemoOutput from './Components/Demo/DemoOutput';
import Button from './Components/UI/Button/Button';

function App() {
  const [btnClicked, setBtnClicked]= useState(false);

  const onClickHandler = ()=>{
    setBtnClicked((prevShow)=>!prevShow);

  }
  

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show= {btnClicked}/>
      <Button onClick={onClickHandler}>Show paragraph!</Button>


      {/* {btnClicked && <p>This is new!</p>}
      <Button onClick = {onClickHandler}>Show paragraph! </Button> */}
    </div>
  );
}

export default App;
