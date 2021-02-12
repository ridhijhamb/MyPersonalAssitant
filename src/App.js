import React,{useState} from 'react'
import './App.css';
import Lists from './components/lists/Lists' ;
import Navbar from './components/navbar/Navbar'
import Board from './components/board/Board'
import Calendar from './components/calendar/Calendar';



function App() {
  const [toggle,setToggle]=useState(0);

  const onClickCalendar=()=>{
    console.log("changed");
    setToggle(1);
  }

  return (
    <html>
      <Navbar/>
      <Board onClickCalendar={onClickCalendar}/>
      <body >
        <div>
          {toggle===0?<Lists/>:(toggle===1?<Calendar/>:null)}
        </div>
      </body>
    </html>
  );
}

export default App;
