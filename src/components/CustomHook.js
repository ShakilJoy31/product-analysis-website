import { useEffect, useState } from "react"

const CustomHook = () =>{
    const [people, setPeople] = useState([]); 
    useEffect(()=>{
        fetch('publicInfo.json')
        .then(res => res.json())
        .then(data => setPeople(data));
    },[]); 

    return [people, setPeople]; 
}
export default CustomHook; 