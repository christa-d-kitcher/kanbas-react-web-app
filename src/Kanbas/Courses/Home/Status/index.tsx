import {
    FaBan,
    FaBell,
    FaBook, FaBullhorn, FaChartBar, FaChartLine, FaCheck, FaCheckCircle, FaClock,
    FaEnvelope, FaFileImport, FaHome, FaLaptop,
    FaNeos, FaQuestionCircle,
    FaRegCalendarAlt,
    FaRegUserCircle, FaSignOutAlt,
    FaTachometerAlt, FaUpload
} from "react-icons/fa";

import {Link} from "react-router-dom";
import "./index.css";
import "../../../../libs/bootstrap/bootstrap.min.css";
import "../../../styles.css";

function Status() {
    const links = [
        {label: "Import Existing Content", icon: <FaFileImport className="fs-4 me-1"/>},
        {label: "Import From Commons", icon: <FaUpload className="fs-4 me-1"/>},
        {label: "Choose Home Page", icon: <FaHome className="fs-4 me-1"/>},
        {label: "View Course Stream", icon: <FaChartBar className="fs-4 me-1"/>},
        {label: "New Announcement", icon: <FaBullhorn className="fs-4 me-1"/>},
        {label: "New Analytics", icon: <FaChartLine className="fs-4 me-1"/>},
        {label: "View Course Notifications", icon: <FaBell className="fs-4 me-1"/>},
    ];

    return (
        <div>
            <div className="row"><h3>Course Status</h3></div>
            <div>
                <button type="button" className="btn btn-light me-2"><FaBan className="me-2 align-middle wd-kanbas-status-icon"/>Unpublish</button>
                <button type="button" className="btn btn-success"><FaCheckCircle className="wd-kanbas-status-icon"/>Published</button>
            </div>
            <div className="wd-kanbas-status-buttons">
                <ul className="wd-kanbas-status-button">
                    {links.map((link, index) => (
                        <li className="mt-2 mb-2">
                            <button type="button" className="btn btn-light ">
                                {link.icon} {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <h4 className="fw-bold">To Do</h4>
            <hr/>
            <span className="wd-kanbas-status-links">
            <i className="fas fa-tasks"></i>
             <a href="#">Grade A1 - ENV + HTML</a><br/>
            <span className="wd-kanbas-status-link-subtitles">100 points . Jan 28 at 11:59pm</span>

        </span><br/><br/>

            <div className="wd-kanbas-status-links">
                <span className="fw-bold">Coming Up</span>

                <a href="#"><i className="far fa-calendar-alt wd-kanbas-status-icon"></i>View
                    Calendar</a>
                <hr/>

                <ul className="wd-kanbas-status-links wd-kanbas-status-icon">
                    <li>
                        <a href="#"><i
                            className="far fa-calendar text-secondary"></i>Lecture</a><br/>
                        <span className="wd-kanbas-status-link-subtitles">CS4550.12631.202410</span><br/>
                        <span
                            className="wd-kanbas-status-link-subtitles">Sep 7 at 11:05am</span><br/>
                    </li>
                    <br/>
                    <li>
                        <a href="#"><i className="far fa-calendar text-secondary"></i>CS5610 06 SP23
                            Lecture</a><br/>
                        <span className="wd-kanbas-status-link-subtitles">CS5610.94321 202410</span><br/>
                        <span
                            className="wd-kanbas-status-link-subtitles">Sep 10 at 11:59pm</span><br/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Status;