import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "../../styles.css";
import "../../../libs/bootstrap/bootstrap.min.css";
import "./index.css";
import {FaCog, FaFileExport, FaFileImport, FaSearch} from "react-icons/fa";

function Grades() {
    const {courseId} = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <>
            <div className="wd-kanbas-entire-page-padding"><hr/>
                <div className="row">
                    <div className="wd-kanbas-modules-buttons">
                        <div className="wd-kanbas-modules-buttons float-end">
                            <span><button type="button" className="btn btn-light"><FaFileImport className="me-2"/>Import</button></span>
                            <span><button type="button" className="btn btn-danger"><FaFileExport className="me-2 text-light"/>Export</button></span>
                            <span><button type="button" className="btn btn-light"><FaCog/></button></span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <label htmlFor="student-names" className="fw-semibold">Student Names</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><FaSearch/></span>
                            <input type="text" id="student-names" className="form-control" placeholder="Search Students"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <label htmlFor="assignment-names" className="fw-semibold">Assignment Names</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><FaSearch/></span>
                            <input type="text" id="assignment-names" className="form-control" placeholder="Search Students"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-responsive wd-kanbas-grades-table">
                <table className="table m-3 text-center table-striped">
                    <thead className="table-secondary">
                        <tr className="wd-grades-no-bottom-border">
                    <th className="wd-kanbas-grades-table-heading mb-7">Student Name</th>
                    {as.map((assignment) => (<th>{assignment.title}</th>))}
                        </tr>
                        <tr>
                            <th></th>
                            {as.map((assignment) => (<th>{assignment.points}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                    {es.map((enrollment) => {
                        const user = users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td className="text-danger">{user?.firstName} {user?.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    console.log("testing what grade is");
                                    console.log(grade);
                                    if (grade != null) {
                                        return (<td>{grade?.grade || ""}</td>);
                                    }
                                                                })}
                            </tr>
                                );
                    })}


                    </tbody>
                </table>
            </div>
        </>

            );
}

export default Grades;