import Header from "../HomepageSection/Header.jsx"
import DeanWords from "../HomepageSection/DeanWords.jsx"
import DepartmentJSON from "../Departments/DepartmentsData.json"
import Footer from "../HomepageSection/Footer.jsx"
import Introduction from "./Introduction.jsx"
import AccordianSection from "../HomepageSection/AccordianSection.jsx"
import styles from "./Department.module.css"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Courses from "./assets/courses.jsx"

export default function SafetyDep() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]); // Unique key for each route
    return (
        <>
            <Header contact={false} inDepartment={true} department={2} />
            <DeanWords inDepartment={true} department={2} departmentData={DepartmentJSON[2]} />
            <Introduction departmentData={DepartmentJSON[2]} />
            <AccordianSection inDepartment={true} departmentData={DepartmentJSON[2]} />
            <Courses department={2} />
            <Footer />
        </>
    )
}