import React,{useState} from 'react'

const App = () => {
  const[value,setCount]=useState(0);
  function DecrementHandler(){
    setCount(value-1);
  };

  function IncrementHandler(){
    setCount(value+1);
  };

  function ResetHandler(){
    setCount(0)
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#2f4f75]">
      <div className="flex flex-col justify-center items-center gap-[1em] font-semibold font-gilroy text-2xl">
        <div className="text-[#34b1fe]">Increment and Decrement</div>
        <div className="flex justify-center items-center bg-white py-[9px] text-4xl font-extrabold font-gilroy rounded-sm text-[#344151]">
          <button onClick={DecrementHandler} className="text-center px-7">-</button>
          <div className="  border-[#bfbfbf] px-[1.4em] py-[7px] border-x-3 text-4xl">{value}</div>
          <button onClick={IncrementHandler} className=" text-center px-7">+</button>

        </div>
        <div>
          <button onClick={ResetHandler} className="bg-[#34b1fe] text-white py-[7px] px-[13px] rounded-sm">Reset</button>
        </div>

      </div>
    </div>
    

  );
}

export default App;