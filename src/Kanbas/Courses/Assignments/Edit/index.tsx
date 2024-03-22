import React, {useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {assignments} from "../../../Database";
import "../../../styles.css";
import "./index.css";
import "../../../../libs/bootstrap/bootstrap.min.css";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {addAssignment, updateAssignment} from "../assignmentsReducer";
import {KanbasState} from "../../../store";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    //const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    //const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);

    const [assignment, setAssignment] = useState({
        _id: "", title: "New Assignment 123", course: "New Assignment course", points: "Out of 100",
        dueDate: "2024-03-28", availableFromDate: "2024-03-21", availableUntilDate: "2024-03-30"
    })

    const assignmentsList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);

    // if (assignmentId !== null) {
    //     const clickedAssignment = (assignmentsList.find((a) => a._id === assignmentId));
    //     setAssignment(clickedAssignment);
    // };


    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = (assignment: { availableFromDate: string; dueDate: string; course: string; _id: string; title: string; availableUntilDate: string; points: string }) => {
        {assignment._id !== "" ? dispatch(updateAssignment(assignment)) : dispatch(addAssignment(assignment))}
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const dispatch = useDispatch();

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
                <input value={assignment?.title} type="text" className="form-control w-25"
                       onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                />
            </div>

            <div className="mt-3">
            <textarea className="form-control"
                      id="textarea1"
                      value={assignment?.course}
                      onChange={(e) => setAssignment({ ...assignment, course: e.target.value })}
                      >This is the assignment description. This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester.
            </textarea>
            </div>

            <div className="row mt-3">
                <div className="col-2 wd-kanbas-edit-assignment-form-labels">
                    Points</div>
                <div className="col-10">
                    <input type="text"
                           className="form-control w-25"
                           value={assignment?.points}
                           onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
                    />
                </div>
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
                            <input type="date" className="form-control"
                                   value={assignment?.dueDate}
                                   onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="row m-3 w-25">
                        <div className="col-6">
                        <span>
                        <label htmlFor="assignee" className="fw-semibold">Available From</label>
                        <div>
                            <input type="date"
                                   className="form-control"
                                   value={assignment?.availableFromDate}
                                   onChange={(e) => setAssignment({ ...assignment, availableFromDate: new Date (e.target.value).toString() })}
                            />
                        </div>
                    </span>
                        </div>

                        <div className="col-6">
                        <span>
                            <label htmlFor="assignee" className="fw-semibold">Until</label>
                            <div>
                                <input type="date"
                                       className="form-control"
                                       value={assignment?.availableUntilDate}
                                       onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}

                                />
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
                    <button onClick={() => handleSave(assignment) } className="btn btn-danger btn-sm float-end me-2">
                        Save
                    </button>
                    {/*How do I have this function onClick for when it's coming from clicking on a specific assignment?*/}
                    {/*onClick={() => dispatch(updateAssignment(assignment))} do I just do an if statement?*/}
                </div>

            </div>

        </div>
    );
}

export default AssignmentEditor;
