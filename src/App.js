import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect(() => {
  //   console.log("CALL THE API ...");
  // }, [])

  // console.log("I run all the time")

  // useEffect(()=>{
  //   if(keyword !== "" && keyword.length >5){
  //     console.log("SEARCH FOR", keyword)
  //   }
  // }, [keyword])

  useEffect(()=>{
    console.log("I run only once.")
  }, [])

  useEffect(()=>{
    console.log("I run when 'keyword' changes.")
  }, [keyword])

  useEffect(()=>{
    console.log("I run when 'counter' changes.")
  }, [counter])

  useEffect(()=>{
    console.log("I run when 'keyword' & 'counter' changes.")
  }, [keyword, counter])

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here !" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
