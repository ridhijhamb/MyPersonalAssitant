import React,{useState} from 'react'
import './App.css';
import Lists from './components/lists/Lists' ;
import Navbar from './components/navbar/Navbar'
import Board from './components/board/Board'
import Calendar from './components/calendar/Calendar';
import Home from './components/home/Home';


function App() {
  const [toggle,setToggle]=useState(0);

  const onClickCalendar=()=>{
    setToggle(1);
  }
  const onClickBoard=()=>{
    setToggle(0);
  }

  return (
    <html>
      <Navbar/>
      <Board onClickCalendar={onClickCalendar} onClickBoard={onClickBoard}/>
      <body >
        <div>
       <Home/>
          {/* {toggle===0?<Lists/>:(toggle===1?<Calendar/>:null)} */}
        </div>
      </body>
    </html>
  );
}

export default App;
