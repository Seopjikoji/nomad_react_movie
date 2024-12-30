import { useEffect, useState } from "react";

function Hello(){

  function CleanUpFn(){
    console.log("Destroyed :(")  
  }

  function EffectFn(){
    console.log("Created :)")
    return CleanUpFn;
  }

  function CleanUpFn(){
    console.log("Destroyed :(")  
  }

  useEffect(EffectFn,[])
    
  return(
    <h1>Hello</h1>
)

}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev)=> !prev)

  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
