import React from 'react';
import styles from './Dashboard.module.css';
import pfp from './images/pfp.png';
import logo from '../HomepageSection/HomepageAssets/BSULogo.png';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';

const Dashboard = () => {
  const [marksData, setMarksData] = useState([])
  const [studentData, setStudentData] = useState([])
  const location = useLocation();
  const user = location.state?.user;
  const StudentID = user[0].StudentID;
  const majors = {
    0: "Petroleum Geology Engineering",
    1: "Computer Engineering",
    2: "Occupational Safety and Health Engineering"
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marksRes = await fetch(`http://localhost:8081/marks/${StudentID}`);
        const marksData = await marksRes.json();
        setMarksData(marksData);

        const studentRes = await fetch(`http://localhost:8081/student/${StudentID}`);
        const studentData = await studentRes.json();
        setStudentData(studentData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);


  const statusStyle = studentData[0]?.Status === "Active" ? styles.statusActive :
    studentData[0]?.Status === "Graduated" ? styles.graduated : styles.statusInactive;
  // ex:  {MarkID: 119, StudentID: 212084, SubjectID: 17, Semester: 1, AttemptNumber: 1, …}

  function ShowSubjects() {
    const groupedBySemester = {};

    // Group subjects by semester
    marksData.forEach(subject => {
      if (!groupedBySemester[subject.Semester]) {
        groupedBySemester[subject.Semester] = [];
      }
      groupedBySemester[subject.Semester].push(subject);
    });

    return (
      <>
        {Object.entries(groupedBySemester).map(([semester, subjects]) => (
          <div key={semester}>
            <h1 style={{ marginBottom: "2%" }}>Semester {semester}</h1>
            <div className='arrange' style={{ marginBottom: "5%" }}>
              {subjects.map(({ SubjectID, SubjectName, SubjectCode, Mark }) => {
                const progressClass =
                  Mark >= 75 ? "high" : Mark >= 50 ? "medium" : "low";

                return (
                  <div key={SubjectID} className={styles.subjectCard}>
                    <h1>{SubjectName}</h1>
                    <small className={styles.textMuted}>{SubjectCode}</small>
                    <div
                      className={`${styles.progress} ${styles[progressClass]}`}
                      style={{ "--percentage": Mark }}
                    >
                      <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                        <circle cx="38" cy="38" r="36"></circle>
                      </svg>
                      <div className={styles.number}>
                        <p>{Mark}%</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </>
    );
  }


  const percentage = 75; // Precentagse HERE!!!!!
  const progressClass =
    percentage >= 75 ? 'high' :
      percentage >= 50 ? 'medium' : 'low';

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.active}`}>
        <div className={styles.logo} title="University Management System">
          <img src={logo} alt="University Logo" />
        </div>

        <div className={styles.navbar}>
          <a className={styles.active}>
            <NavLink
              to={"/"}>
              <h3>HOME</h3>
            </NavLink>
          </a>
        </div>

      </header>
      <aside className={styles.aside}>
        <div className={styles.profile}>
          <div className={styles.top}>
            <div className={styles.profilePhoto}>
              <img src={pfp} alt="Profile" />
            </div>
            <div className={styles.info}>
              <p>Hey, <b>{studentData[0]?.Name}</b></p>
              <small className={styles.textMuted}>{studentData[0]?.StudentID}</small>
            </div>
          </div>
          <div className={styles.about}>
            <h5>Major</h5>
            <p>{majors[studentData[0]?.MajorID]}</p>
            <h5>Current Semester</h5>
            <p>{studentData[0]?.CurrentSemester}</p>
            <h5>Status</h5>
            <p className={statusStyle}>{studentData[0]?.Status}</p>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <h1>Progress</h1>
        <div className={styles.subjects}>
          {ShowSubjects()}
        </div>
      </main>

      <div className={styles.right}>
        <div className={styles.announcements}>
          <h2>Announcements</h2>
          <div className={styles.updates}>
            <div className={styles.message}>
              <p><b>Academic</b> Summer training internship with Live Projects.</p>
              <small className={styles.textMuted}>2 Minutes Ago</small>
            </div>
            {/* Add other announcements here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;