import { useState, useEffect } from "react"

export default function Login(props) {
    const [nationalNumber, setNationalNumber] = useState('')
    const [id, setId] = useState('')
    const [userData, setUserData] = useState(null)
    const [shouldFetch, setShouldFetch] = useState(false)

    console.log(nationalNumber, id)
    function handleLogin(e) {
        e.preventDefault()

        fetch(`http://localhost:8081/student/${id}&${nationalNumber}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                props.setUser(data)  
                props.toggle()      
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        National Number:
                        <input type="text" value={nationalNumber} onChange={e => setNationalNumber(e.target.value)} />
                    </label>
                    <label>
                        ID:
                        <input type="text" value={id} onChange={e => setId(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                </form>
                <button onClick={props.toggle}><i class="bi bi-x"></i></button>
            </div>
        </div>
    )
}