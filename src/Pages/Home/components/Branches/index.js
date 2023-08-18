import axios from "axios";
import CardItem from "../CardItem";
import { useEffect, useState } from "react";

const Branches = () => {
    const [branchs,setBranchs] = useState([])


    const getBranchData = async() => { 
        const response = await axios.get('https://82d4d64c-bce0-4f3b-94e9-624d12cee2ed.mock.pstmn.io/branches');
       console.log(response,'response');
        const {data} = response
        setBranchs(data.data)
    }


    useEffect(()=>{
       getBranchData();
    },[])

        
        useEffect(()=>{
            console.log(branchs,'branchs');
        })



    return ( 
        <>
        <div className="flex flex-col justify-center items-center mb-32 mt-4">
            <div className="">ترخینه گردی</div>
            <div className="flex flex-row justify-center items-center mt-4 gap-2 ">
                {branchs.map((item)=>
               <CardItem title={item?.title} description={item?.adress}/>
               )}

            </div>
        </div>
        </>
     );
}
 
export default Branches;

