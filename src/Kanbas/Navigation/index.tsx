import { Link, useLocation } from "react-router-dom";

//Importing CSS stylesheets
import "../styles.css";
import {
    FaTachometerAlt,
    FaRegUserCircle,
    FaBook,
    FaRegCalendarAlt,
    FaClock,
    FaLaptop,
    FaSignOutAlt,
    FaQuestionCircle,
    FaEnvelope,
    FaNeos
} from "react-icons/fa";
import "../../libs/bootstrap/bootstrap.min.css";
import "./index.css";


function KanbasNavigation() {
    const links = [
        { label: " ",   icon: <FaNeos className="fs-2 wd-red-icon" />},
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt color='red' className="fs-2" />},
        { label: "Courses",   icon: <FaBook color='red' className="fs-2"/>},
        { label: "Calendar",  icon: <FaRegCalendarAlt color='red' className="fs-2" />},
        { label: "Inbox",  icon: <FaEnvelope color='red' className="fs-2" />},
        { label: "History",  icon: <FaClock color='red' className="fs-2" />},
        { label: "Studio",  icon: <FaLaptop color='red' className="fs-2" />},
        { label: "Commons",  icon: <FaSignOutAlt color='red' className="fs-2" />},
        { label: "Help",  icon: <FaQuestionCircle color='red' className="fs-2" />}
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;

