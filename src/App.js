import { useEffect, useState } from "react";

function Hello(){

  // function CleanUpFn(){
  //   console.log("Destroyed :(")  
  // }

  // function EffectFn(){
  //   console.log("Created :)")
  //   return CleanUpFn
  // }

  // useEffect(EffectFn,[])

  function EffectFn(){
    console.log("Created :)")
  }

  function CleanUpFn(){
    console.log("Destroyed :(")  
  }
  
  // useEffect(()=>{
  //   EffectFn()
  //   return () => {CleanUpFn()} 
  // }, [])

  // useEffect(()=>{
  //   console.log("Created :)")
  //   return ()=> {console.log("Destroyed :(")}
  // }, [])


  // useEffect(function(){
  //   console.log("Created :)")
  //   return function(){
  //   console.log("Destroyed :(")  
  //   };
  // }, [] )

  useEffect(function(){
    EffectFn()
    return CleanUpFn;
  }, [] )

  
    
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
