import React, {useCallback, useState} from 'react';
import './App.css';
import DemoOutput from './Components/Demo/DemoOutput';
import Button from './Components/UI/Button/Button';

function App() {
  const [btnClicked, setBtnClicked]= useState(false);
  console.log('APP RUNNING');

  const[allowToggle, setAllowToggle]= useState(false);

  const onClickHandler = useCallback(()=>{
    if(allowToggle){
    setBtnClicked((prevShow)=>!prevShow);
    }

  }, [allowToggle]);
  //dependencies

  const allowToggleHandler=()=>{
    setAllowToggle(true);
  }
  

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show= {false}/> 
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>     <Button onClick={onClickHandler}>Show paragraph!</Button>



      {/* {btnClicked && <p>This is new!</p>}
      <Button onClick = {onClickHandler}>Show paragraph! </Button> */}
    </div>
  );
}

export default App;
