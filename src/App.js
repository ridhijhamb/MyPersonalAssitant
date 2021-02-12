import React,{useState} from 'react'
import './App.css';
import Lists from './components/lists/Lists' ;
import Navbar from './components/navbar/Navbar'
import Board from './components/board/Board'
import Calendar from './components/calendar/Calendar';
import Home from './components/home/Home';
import DataAnalysis from './components/dataAnalysis/DataAnalysis'

function App() {
  const [toggle,setToggle]=useState(2);

  const onClickCalendar=()=>{
    setToggle(1);
  }
  const onClickBoard=()=>{
    setToggle(0);
  }
  const onClickHome=()=>{
    setToggle(2);
  }

  const onClickStats=()=>{
    setToggle(3);
  }

  return (
    <html>
      <Navbar onClickHome={onClickHome}/>
      <Board onClickCalendar={onClickCalendar} onClickBoard={onClickBoard} onClickStats={onClickStats}/>
      <body >
        <div>
          {toggle===0?<Lists/>:(toggle===1?<Calendar/>:(toggle===2?<Home/>:<DataAnalysis/>))}
        </div>
      </body>
    </html>
  );
}

export default App;
