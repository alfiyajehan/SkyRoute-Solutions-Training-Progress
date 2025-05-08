import React,{useState, useEffect} from 'react'
import './app.css';

const App = () => {
  const [timer, setTimer]=useState(0);
  useEffect(()=>{
    const timerInterval=setInterval(()=>{
      setTimer(timer => timer+1)
    }, 1000);

  return ()=> {clearInterval(timerInterval)};
}, []);

  return (
    <div>
      <h1 className="text-4xl font-extrabold">Seconds:{timer}</h1>
    </div>
  )
}
export default App;