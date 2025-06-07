
import { useEffect, useState } from "react"
import styles from "./courses.module.css"

export default function courses({ department }) {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8081/subject/${department}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    const groupedBySemester = data.reduce((acc, subject) => {
        const sem = subject.Semester;
        if (!acc[sem]) acc[sem] = [];
        acc[sem].push(subject);
        return acc;
    }, {});

    return (
        <div className={`${styles.courseGrid}`}>
            {Object.entries(groupedBySemester).map(([semester, subjects]) => (
                <div key={semester} className={`${styles.semesterSection}`}>
                    <h2>Semester {semester}</h2>
                    <div className={`${styles.subjectsGrid}`}>
                        {subjects.map(subject => (
                            <div key={subject.SubjectID} className={`${styles.subjectCard}`}>
                                <h3>{subject.Name}</h3>
                                <p>{subject.SubjectCode}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

}