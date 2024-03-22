import React from "react";
import {FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import "../../styles.css";
import "../Modules/index.css";
import { confirmAlert } from 'react-confirm-alert';
import {deleteModule, setModule} from "../Modules/reducer";

import { useSelector, useDispatch } from "react-redux";
import {addAssignment, deleteAssignment, updateAssignment} from "../Assignments/assignmentsReducer";
import {KanbasState} from "../../store";

function Assignments() {
    const { courseId } = useParams();
    //const assignmentList = assignments.filter((assignment) => assignment.course === courseId);

    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);

    const dispatch = useDispatch();

    const handleDelete = (assignmentId: string) => {
         window.confirm('Are you sure you want to remove the assignment?', ) && dispatch(deleteAssignment(assignmentId)) };


    return (
        <div className="col wd-kanbas-screen-component-padding wd-kanbas-entire-page-padding pe-5">
            <div className="row">
                <div className="col-8">
                    <div>
                        <input type="text" className="form-control w-25"
                               placeholder="Search Assignment"/>
                    </div>
                </div>
                <div className="col float-end wd-kanbas-modules-buttons">
                    <div className="wd-kanbas-modules-buttons">
                        <span><button type="button" className="btn btn-light me-2"><FaPlus className="me-2"/>Group</button></span>
                        <span>
                            <button type="button"
                                      className="btn btn-danger me-2">
                                      <FaPlus className="me-2"/>
                                    <Link className="wd-no-text-deco"
                                          to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}>
                                        Assignment
                                    </Link>
                              </button>
                        </span>
                        <a href="#">
                            <button type="button" className="btn btn-light"><FaEllipsisV/></button>
                        </a>
                    </div>
                </div>
            </div><hr/>

            <div className="row wd-kanbas-entire-page-padding">
                <ul className="list-group wd-modules">
                    <li className="list-group-item">
                        <div>
                            <FaEllipsisV className="me-2" /><span className="fw-bold">ASSIGNMENTS</span>
                            <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                </span>
                        </div>
                        <ul className="list-group">
                            {assignmentList.map((assignment) => (
                                <li className="list-group-item">
                                    <FaEllipsisV className="ms-3 me-2" />
                                    <Link
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        className="wd-no-text-deco">
                                        {assignment.title}
                                    </Link>
                                    <span className="float-end">
                                        <button className="btn btn-danger text-light float-end" onClick={() => handleDelete(assignment._id)}>
                                             Delete
                                        </button>
                                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                                    </span>
                                </li>))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );}
export default Assignments;