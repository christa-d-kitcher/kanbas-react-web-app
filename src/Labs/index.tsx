import Assignment3 from "./a3";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "../Nav";

//2.1.3 Breaking out assignments into separate components
function Labs() {
    return (
        <div>
            <Nav/>
            <Link to="/Labs/a3">Assignment 3</Link>
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
            </Routes>
        </div>
    );
}
export default Labs;
