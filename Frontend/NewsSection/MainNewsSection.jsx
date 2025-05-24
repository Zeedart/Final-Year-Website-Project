
import { useEffect, useState } from "react"

export default function NewsSection(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/students')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])
 


    return (
        console.log("NEWS SECTION!!!")
    )

}