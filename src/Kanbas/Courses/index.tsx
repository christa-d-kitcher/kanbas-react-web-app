import { courses } from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import "../styles.css";
import "./Navigation/index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Edit";
import Grades from "./Grades";
import {useLocation} from "react-router";

function Courses({ coursesSV }: { coursesSV: any[]; }) {
    const { courseId } = useParams();
    const location = useLocation();
    const {pathname} = location;
    const course = coursesSV.find((course) => course._id === courseId);
    return (
        <div>
            <div className="row"><h6 className="pt-2 wd-red-txt"><HiMiniBars3 className="me-2" color='red'/>{course?.number} {course?.name} {pathname.includes("Modules") && "> modules"}</h6> <hr/></div>
            <div className="row">
                <div className="col-2">
                    <CourseNavigation/>
                </div>

                <div className="col-10">
                    <div className="wd-kanbas-screen-component-padding wd-kanbas-course-nav">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Zoom" element={<h1>Zoom Meetings</h1>} />
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                            <Route path="Assignments/AssignmentEditor" element={<AssignmentEditor/>} />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="Grades" element={<Grades/>} />
                            <Route path="People" element={<h1>People</h1>} />
                            <Route path="Panopto" element={<h1>Panopto Video</h1>} />
                            <Route path="Discussions" element={<h1>Discussions</h1>} />
                            <Route path="Announcements" element={<h1>Announcements</h1>} />
                            <Route path="Pages" element={<h1>Pages</h1>} />
                            <Route path="Files" element={<h1>Files</h1>} />
                            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                            <Route path="Settings" element={<h1>Settings</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses;