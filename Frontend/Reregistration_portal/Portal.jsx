import React, { useState } from 'react';
import './Portal.css';

const Portal = () => {
    const [nationalNumber, setNationalNumber] = useState('');
    const [id, setId] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [message, setMessage] = useState('');

    const handleActivation = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        setMessage('');

        try {
            // 1. Verify student exists first
            const verifyRes = await fetch(`http://localhost:8081/student?id=${id}&national=${nationalNumber}`);
            const verifyData = await verifyRes.json();

            if (!verifyData || verifyData.length === 0) {
                throw new Error('No student found with these credentials');
            }

            const student = verifyData[0];
            setStudentData(student);

            // 2. Check if already active
            if (student.Status === 'Active') {
                setMessage('Student is already active');
                return;
            }

            if (student.Status === 'Graduated') {
                setMessage('Student is Graduated');
                return;
            }

            if (student.Status === 'Suspended') {
                setMessage('Student is Suspended');
                return;
            }


            // 3. Prepare activation request
            const activationRes = await fetch('http://localhost:8081/student/activate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    studentId: Number(student.StudentID), // Ensure number type
                    nationalId: String(student.National_ID) // Ensure string type
                })
            });

            // 4. Handle response
            if (!activationRes.ok) {
                const errorData = await activationRes.json().catch(() => ({}));
                throw new Error(errorData.error || 'Activation failed');
            }

            const result = await activationRes.json();
            setMessage(result.message);
            setStudentData(prev => ({ ...prev, Status: 'Active' }));

        } catch (err) {
            console.error('Activation error:', err);
            setMessage(err.message.includes('<!DOCTYPE html>')
                ? 'Server error - check backend logs'
                : err.message);
        } finally {
            setIsUpdating(false);
        }
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

                <button
                    type="submit"
                    className="submit-button"
                    disabled={isUpdating}
                >
                    {isUpdating ? 'Processing...' : 'Submit'}
                </button>

                {message && (
                    <div
                        className={`message ${!studentData
                                ? "Error"
                                : studentData.Status === "Active"
                                    ? "Active"
                                    : studentData.Status === "Graduated"
                                        ? "Graduated"
                                        : studentData.Status === "Suspended"
                                            ? "Suspended"
                                            : ""
                            }`}
                    >
                        {message}
                    </div>
                )}


                {studentData && (
                    <div className="student-info">
                        <h3>Student Information</h3>
                        <p>Name: {studentData.Name}</p>
                        <p>Student ID: {studentData.StudentID}</p>
                        <p>Major ID: {studentData.MajorID}</p>
                        <p>Current Semester: {studentData.CurrentSemester}</p>
                        <p>Status: {studentData.Status}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Portal;