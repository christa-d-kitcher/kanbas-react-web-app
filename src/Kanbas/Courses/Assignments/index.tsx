import React from "react";
import {FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import "../../styles.css";
import "../Modules/index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
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
                        <span><button type="button" className="btn btn-danger me-2"><FaPlus className="me-2"/>Assignment</button></span>
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
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-no-text-deco">{assignment.title}</Link>
                                    <span className="float-end">
                      <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                                </li>))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );}
export default Assignments;