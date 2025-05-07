import React from 'react';
import './App.css';
import Item from './Components/item.jsx';
import ItemDate from './Components/ItemDate';
import Card from "./Components/Card";
import Button from './Components/Button.jsx';
const App = () => {
  const itemTwo=20;
  // return (
  //     <div>
  //     <Item></Item>
  //     <ItemDate day="16" month="March" year="2025"></ItemDate>
  //     <ItemDate day={itemTwo} month="April" year="2025"></ItemDate>
  //     <ItemDate day="30" month="May" year="2025"></ItemDate>
  //     <div className="App">App</div>
  //   </div>
  // );


  const response=[
    {
    itemDate:"16",
    itemMonth:"March",
    itemYear:"2025",
    ItemName:"Metal",

    },
    {
      itemDate:"30",
      itemMonth:"April",
      itemYear:"2025"
  
      },
      {
        itemDate:"3",
        itemMonth:"May",
        itemYear:"2025"
    
        }
  ];

  // return (
  //   <div>
  //   <Item></Item>
  //   <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
  //   <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
  //   <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
  //   <div className="App">App</div>
  // </div>

  // );



return (
  <div>
    <Card>
      <Item></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      {/* <Button btnContent={"click me"} /> */}
      <Button>Click Here</Button>
    </Card>
  </div>
)

}


export default App;


