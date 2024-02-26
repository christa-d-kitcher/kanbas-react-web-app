import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {assignments} from "../../../Database";
import "../../../styles.css";
import "./index.css";
import "../../../../libs/bootstrap/bootstrap.min.css";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="col wd-kanbas-screen-component-padding wd-kanbas-entire-page-padding pe-5">
            <hr/>
            <div className="row mt-3">
                <div className="wd-kanbas-modules-buttons">
                    <div className="wd-kanbas-modules-buttons float-end">
                        <span><FaCheckCircle/></span>
                        <span className="text-success fw-bold me-3">Published</span>
                        <span><button type="button" className="btn btn-light"><FaEllipsisV/></button></span>
                    </div>
                </div>
            </div>
            <hr/>

            <div>
                Assignment Name
            </div>
            <div>
                <input value={assignment?.title} type="text" className="form-control w-25"/>
            </div>

            <div className="mt-3">
            <textarea className="form-control"
                      id="textarea1"
                      >This is the assignment description. This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester.
            </textarea>
            </div>

            <div className="row mt-3">
                <div className="col-2 wd-kanbas-edit-assignment-form-labels">Points</div>
                <div className="col-10"><input type="text" className="form-control w-25"
                                               value="100"/></div>
            </div>

            <div className="row mt-3">
                <div className="col-2 wd-kanbas-edit-assignment-form-labels">Assignment Group</div>
                <div className="col-10 w-25">
                    <select className="form-select">
                        <option selected>ASSIGNMENTS</option>
                        <option value="1">QUIZ</option>
                        <option value="2">MID-TERM</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-2 wd-kanbas-edit-assignment-form-labels">Display Grade as</div>
                <div className="col-10 w-25">
                    <select className="form-select">
                        <option selected>Percentage</option>
                        <option value="1">Numeric</option>
                        <option value="2">Letter Grade</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-2 wd-kanbas-edit-assignment-form-labels"></div>
                <div className="col-10">
                    <input className="form-check-input"
                           type="checkbox" id="edit-assignment1"/>
                    <label className="form-check-label" htmlFor="edit-assignment1">
                        Do not count this assignment towards the final grade.</label>

                </div>
            </div>

            <div className="row mt-3">
                <div className="col-2 wd-kanbas-edit-assignment-form-labels">Assign</div>
                <div className="col-10 ">
                    <div className="m-3 row w-25">
                        <label htmlFor="assignee" className="fw-semibold">Assign To</label>
                        <div>
                            <input type="text"
                                   className="form-control"
                                   id="assignee"/>
                                <span><button type="button"
                                              className="btn btn-light btn-sm wd-kanbas-edit-assignment-assignee">Everyone<i
                                    className="fas fa-times ms-2"></i></button></span>
                        </div>
                    </div>

                    <div className="row m-3 w-25">
                        <label htmlFor="assignee" className="fw-semibold">Due</label>
                        <div>
                            <input type="text" className="form-control"
                                   value="Jan 28, 2024, 11:59pm"/>
                        </div>
                    </div>

                    <div className="row m-3 w-25">
                        <div className="col-6">
                        <span>
                        <label htmlFor="assignee" className="fw-semibold">Available From</label>
                        <div>
                            <input type="text" className="form-control" value="01/28/24"/>
                        </div>
                    </span>
                        </div>

                        <div className="col-6">
                        <span>
                            <label htmlFor="assignee" className="fw-semibold">Until</label>
                            <div>
                                <input type="text" className="form-control" value="02/08/24"/>
                            </div>
                        </span>
                        </div>
                    </div>

                    <div className="row m-3 w-25 bg-light wd-edit-center-text">
                        <span><i className="fas fa-plus me-2"></i>Add</span>
                    </div>


                </div>
            </div>
            <hr/>

            <div className="row mt-3">
                <div className="col-6">
                    <input className="form-check-input"
                           type="checkbox" id="edit-assignment"/>
                    <label className="form-check-label" htmlFor="edit-assignment">
                        Do not count this assignment towards the final grade.</label>

                </div>
                <div className="col-6">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light btn-sm float-end">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger btn-sm float-end me-2">
                        Save
                    </button>
                </div>

            </div>

        </div>
    );
}

export default AssignmentEditor;
