import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";

//Importing CSS stylesheets
import "../styles.css";
import "./index.css"
import "../../libs/bootstrap/bootstrap.min.css";


function Dashboard() {
    return (
        <div className="col-11 p-4 ps-sm-5">
            <h1>Dashboard</h1> <hr/>
            <h2 className="wd-kanbas-darker-text">Published Courses (8)</h2> <hr/>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col wd-kanbas-dashboard-column-width wd-kanbas-dashboard-card-spacing">
                            <div className="card wd-kanbas-dashboard-card">
                                <img src={`/images/${course.image}`} className="card-img-top wd-kanbas-dashboard-images"/>
                                <div className="card-body wd-kanbas-dashboard-card">
                                    <Link className="card-title card-title wd-kanbas-dashboard-course-name" to={`/Kanbas/Courses/${course._id}/Home`}>
                                        {course.name}
                                    </Link>
                                    <p className="card-text wd-kanbas-dashboard-course-code">{`${course.number}.${course._id}.202410`}</p>
                                    <p className="card-text wd-kanbas-dashboard-smaller-text">Spring 2024 Semester Full Term</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-kanbas-dashboard-card-icon">
                                        <i className="fas fa-edit"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;