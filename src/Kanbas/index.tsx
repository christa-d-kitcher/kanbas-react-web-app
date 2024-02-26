//2.1.5 Creating a Kanbas placeholder component
import {Link} from "react-router-dom";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

//Importing CSS stylesheets
import "./styles.css";
//import "./Navigation/index.css";
import "../libs/bootstrap/bootstrap.min.css";


function Kanbas() {
    return (
        <div className="d-flex">
            <div className="col-1">
                <KanbasNavigation/>
            </div>
            <div className="col-11">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard/>} />
                    <Route path="Courses/:courseId/*" element={<Courses/>} />
                    <Route path="Courses/*" element={<Courses/>} />
                </Routes>
            </div>
        </div>
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