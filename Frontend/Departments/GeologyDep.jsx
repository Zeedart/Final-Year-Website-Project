import Header from "../HomepageSection/Header.jsx"
import DeanWords from "../HomepageSection/DeanWords.jsx"
import DepartmentJSON from "../Departments/DepartmentsData.json"
import Footer from "../HomepageSection/Footer.jsx"
import Introduction from "./Introduction.jsx"
import AccordianSection from "../HomepageSection/AccordianSection.jsx"
import styles from "./Department.module.css"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Courses from "./assets/courses.jsx"

export default function GeologyDep() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]); // Unique key for each route
    return (
        <>
            <Header contact={false} inDepartment={true} department={0} />
            <DeanWords inDepartment={true} department={0} departmentData={DepartmentJSON[0]} />
            <Introduction departmentData={DepartmentJSON[0]} />
            <AccordianSection inDepartment={true} departmentData={DepartmentJSON[0]} />

            <section className={`${styles.departmentStructure}`}>
                <h1>Department Organizational Structure</h1>
                <a href={DepartmentJSON[0].link} className="heroBtn">
                    <button>Click Here</button>
                </a>
            </section>

            <Courses department={0} />

            <Footer />
        </>
    )
}