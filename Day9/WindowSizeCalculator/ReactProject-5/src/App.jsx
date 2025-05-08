import React,{useState, useEffect} from 'react'
import './app.css';

const App = () => {


const [width,setWidth] =useState(window.innerWidth);
const [height,setHeight] = useState(window.innerHeight);


useEffect(()=>{

  const handleResize= ()=>{
  setWidth(window.innerWidth);
  SetHeight(window.innerHeight);
} 

  window.addEventListener("resize",handleResize);
  return ()=> window.removeEventListener("resize", handleResize);
},[]);

  return (
    <div>
      <h2 className="text-2xl font-bold">Width:{width}</h2>
      <h2 className="text-2xl font-bold">Height:{height}</h2>
    </div>
  )
}


// # TIMER COMPONENT->

// const App = () => {
//   const [timer, setTimer]=useState(0);
//   useEffect(()=>{
//     const timerInterval=setInterval(()=>{
//       setTimer(timer => timer+1)
//     }, 1000);

//   return ()=> {clearInterval(timerInterval)};
// }, []);

//   return (
//     <div>
//       <h1 className="text-4xl font-extrabold">Seconds:{timer}</h1>
//     </div>
//   )
// }



// # DATA FETCHER <COMPONENT->

// const App = () => {
//   const [data,setData]= useState([]);
//   const [loading,setLoading]= useState(true);


//   useEffect( ()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')

//     .then(response => response.json())
//     .then(data=>{
//       setData(data);
//       setLoading(false);
//     });
//   },[]);

//   return (
//     <div>
//       {loading ?(
//         <h1>Loading...</h1>
//       ) 
//       :
//       (
//         <ul>
//         {data.map(post =>(
//           <li key={post.id}>{post.title}</li>
//         )
//         )}
//         </ul>
//       )
//     }
//     </div>
//   )
// }

export default App;