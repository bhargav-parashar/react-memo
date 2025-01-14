import {useState, memo} from 'react';



const ShowMultipliedCount = ({count1}) =>{
  console.log("rendered showMultipliedCount"); //THIRD
  
  const mCount = count1 * 2;
  
  return(
    <p>Multiplied Count : {mCount} </p>
  )
};

//MEMO

const MemoisedShowMultipliedCount = memo(ShowMultipliedCount);

console.log("rendered file App.js");  //FIRST

function App() {
  console.log("rendered App");  //SECOND

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  return (
    <>
      <h2>Hello From App.js</h2>
      <h2>memo</h2>
      <button onClick={()=>setCount1((prev)=>prev+1)}>{`Count 1 : ${count1}`}</button>
      <button onClick={()=>setCount2((prev)=>prev+1)}>{`Count 2 : ${count2}`}</button>
      {/* <ShowMultipliedCount count1 = {count1}/> */}
      <MemoisedShowMultipliedCount count1 = {count1}/>
    </>
  );
}

export default App;
