import { useState } from "react";
const CounterApp:React.FC=()=>{
const [count,setCount]=useState(0)

const increment=()=>{
	setCount(count+1);
}
const decrement=()=>{
	setCount(count>0 ? count - 1 : 0)
}


return(
<div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">

</div>
)

 }

 export default CounterApp