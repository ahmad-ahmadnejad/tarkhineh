import { useDeferredValue, useMemo } from "react";

const Items = ({list}) => {
    const deferedValue = useDeferredValue(list)
    const memoizedd = useMemo(()=>{
        return deferedValue
    },[deferedValue])
    return ( 
      
        memoizedd.map((item)=><div>{item}</div>)
      
     );
}
 
export default Items;