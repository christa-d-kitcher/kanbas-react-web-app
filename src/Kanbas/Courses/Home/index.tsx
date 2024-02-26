import ModuleList from "../Modules/List";
import Status from "./Status";

import "../../styles.css";

function Home() {
    return (
        <div className="row">
            <div className="col-8">
                <ModuleList />
            </div>

            <div className="pe-2 pt-4 col-lg-3 col-xl-3 col-xxl-4 d-none d-xl-block">
                <Status/>
            </div>

        </div>
    );
}
export default Home;