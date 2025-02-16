import{ useState } from "react"
const Counter = () => {
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={() => setCount(count+1)}>Add</button>
            <button onClick={() => setCount(count-1)}>Reduce</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
export default Counter;