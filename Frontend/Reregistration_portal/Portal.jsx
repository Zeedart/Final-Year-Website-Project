import React, { useState } from 'react';
import './Portal.css';

const Portal = () => {
    const [nationalNumber, setNationalNumber] = useState('')
    const [id, setId] = useState('')

    const handleActivation = (e) => {
        e.preventDefault()

        fetch(`http://localhost:8081/student?id=${id}&national=${nationalNumber}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="registration-portal">
            <h1 className="portal-title">Reregister</h1>
            <p className="portal-subtitle">Please fill in the fields</p>

            <form onSubmit={handleActivation} className="registration-form">
                <div className="form-group">
                    <label htmlFor="nationalId">National ID</label>
                    <input
                        type="text"
                        id="nationalId"
                        name="nationalId"
                        value={nationalNumber}
                        onChange={e => setNationalNumber(e.target.value)}
                        placeholder="Enter your National ID"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="studentId">Student ID</label>
                    <input
                        type="text"
                        id="studentId"
                        name="studentId"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        placeholder="Enter your Student ID"
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Portal;