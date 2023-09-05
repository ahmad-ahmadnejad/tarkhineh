import { Suspense, useDeferredValue, useEffect, useMemo, useState } from "react";
import Items from "./items";

const Blog = () => {
    const [nameList,setNameList] = useState([])
    const [typedName,setTypedName] = useState('')
const nameChangeHandler = (e)=>{
    const prevNane = [...nameList]
    prevNane.push(e.target.value)
    setNameList(prevNane)
    setTypedName('')
}

useEffect(()=>{
    console.log(nameList);
},[nameList])
    return (
        <div style={{width:'200px'}}>
        <input value={typedName}  onChange={nameChangeHandler} />
        <Suspense fallback="...">
        <Items list={nameList}/>
        </Suspense>
        </div>
    )
}
 
export default Blog;