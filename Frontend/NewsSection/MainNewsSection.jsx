
import { useEffect, useState } from "react"
import Portal from "../Reregistration_portal/Portal"

export default function NewsSection(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/students')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])
 


    return (
        <Portal />
    )

}