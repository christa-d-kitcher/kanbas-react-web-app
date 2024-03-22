//2.1.5 Creating a Kanbas placeholder component
import {Link} from "react-router-dom";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {courses} from "./Database"
import { useState } from "react";

import store from "./store";
import { Provider } from "react-redux";

//Importing CSS stylesheets
import "./styles.css";
//import "./Navigation/index.css";
import "../libs/bootstrap/bootstrap.min.css";


function Kanbas() {
    const [coursesSV, setCourses] = useState<any[]>(courses);
    const [course, setCourse] = useState({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...coursesSV, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: string) => {
        setCourses(coursesSV.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            coursesSV.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <div className="col-1">
                    <KanbasNavigation/>
                </div>
                <div className="col-11">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                coursesSV={coursesSV}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        } />
                        <Route path="Courses/:courseId/*" element={<Courses coursesSV ={coursesSV}/>} />
                        <Route path="Courses/*" element={<Courses coursesSV ={coursesSV}/>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );}
export default Kanbas;



// import Nav from "../Nav";
//
//
// function Kanbas() {
//     return(
//         <div>
//             <Nav/>
//             <h1>Kanbas</h1>
//         </div>
//     );
// }
// export default Kanbas