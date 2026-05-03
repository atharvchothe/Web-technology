import { useState } from "react"

function counter()
{
    const [count ,setcount]=useState(0)
    return(
        <>
            <h2>Count : {count}</h2>
            <button onClick = { ()=> setcount(count +1)}>Click</button>
        </>
    )
    
}
export default counter;