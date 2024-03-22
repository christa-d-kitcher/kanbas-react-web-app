import Assignment3 from "./a3";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4";
import { Provider } from "react-redux";
import store from "./store";

//2.1.3 Breaking out assignments into separate components
function Labs() {
    return (
        <Provider store={store}>
        <div>
            <Nav/>
            <Link to="/Labs/a3">Assignment 3</Link>
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
                <Route path="a4" element={<Assignment4/>} />
            </Routes>
        </div>
        </Provider>
    );
}
export default Labs;
