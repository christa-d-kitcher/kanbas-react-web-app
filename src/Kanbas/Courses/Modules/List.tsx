
import React, { useState } from "react";
import "../../styles.css";
import "./index.css";
import "../../../libs/bootstrap/bootstrap.min.css";

import {modules} from "../../Database";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown, FaPlus} from "react-icons/fa";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    //const modules = db.modules;
    // console.log("Testing");
    // console.log(modules);
    // console.log(courseId);
    // //const modulesList = modules.filter((module) => module.course === courseId);
    // const [modulesList, setModuleList] = useState<any[]>(modules.filter((module) => module.course === courseId));

    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });
    // const addModule = (module: any) => {
    //     const newModule = { ...module,
    //         _id: new Date().getTime().toString() };
    //     const newModuleList = [newModule, ...modulesList];
    //     setModuleList(newModuleList);
    // };
    //
    // const deleteModule = (moduleId: string) => {
    //     const newModuleList = modulesList.filter(
    //         (module) => module._id !== moduleId );
    //     setModuleList(newModuleList);
    // };
    //
    // const updateModule = () => {
    //     const newModuleList = modulesList.map((m) => {
    //         if (m._id === module._id) {
    //             return module;
    //         } else {
    //             return m;
    //         }
    //     });
    //     setModuleList(newModuleList);
    // };


    const modulesList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    const [selectedModule, setSelectedModule] = useState(modulesList[0]);

    return (
        <div className="wd-modules-padding-all-round">
            <div className="row">
                <div className="float-end wd-kanbas-modules-buttons">
                    <div className="wd-kanbas-modules-buttons">
                        <span><button type="button" className="btn btn-light me-2">Collapse All</button></span>
                        <span><button type="button" className="btn btn-light me-2">View Progress</button></span>

                        <span className="dropdown">
                            <button className="btn btn-light dropdown-toggle me-2" type="button" data-toggle="dropdown">
                                <FaCheckCircle className="me-2 text-success"/>
                              Publish All
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item me-2" href="#">Publish now</a></li>
                              <li><a className="dropdown-item me-2" href="#">Schedule Publish</a></li>
                            </ul>
                        </span>

                        <span><button type="button" className="btn btn-danger me-2">Module</button></span>

                        <span><button type="button" className="btn btn-light"><FaEllipsisV/></button></span>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="row">

                <div>
                    <input value={module.name}
                           onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                           placeholder="New Module Name"
                           className="form-control w-50"
                    /><br/>

                    <textarea value={module.description}
                              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                              placeholder="New Module Description"
                              className="form-control w-50"
                    /><br/>
                    <button  onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                             className="form-control w-25 float-end btn btn-success"
                    >
                        Add
                    </button>
                    <button onClick={() => dispatch(updateModule(module))}
                            className="form-control w-25 float-end btn btn-dark"
                    >
                        Update
                    </button>
                </div>
                <ul className="list-group wd-modules">
                    <li className="list-group-item">

                    </li>

                    {modulesList.map((module: any, index: number) => (
                        <li key={index}
                            className="list-group-item fw-bold"
                            onClick={() => setSelectedModule(module)}>
                            <div>
                                <FaEllipsisV className="me-0"/><FaEllipsisV className="ms-0 me-2"/><FaCaretDown className="me-2"/>
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success align-middle" />
                                    <FaPlus className="ms-2 align-middle" />
                                    <FaEllipsisV className="ms-2 align-middle" />

                                     <button onClick={() => dispatch(setModule(module))}
                                             className="btn btn-warning float-end"
                                     >
                                         Edit
                                     </button>


                                    <button onClick={() => dispatch(deleteModule(module._id))}
                                            className="btn btn-danger float-end"
                                    >
                                       <span className="text-light">Delete</span>
                                    </button>

                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: any, index: number) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-0 ms-4"/><FaEllipsisV className="ms-0 me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                              <FaCheckCircle className="text-success align-middle" />
                                              <FaEllipsisV className="ms-2 align-middle" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ModuleList;



// import React, {useState} from "react";
// import "./index.css";
// import {modules} from "../../Database";
// import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
// import { useParams } from "react-router";
// function ModuleList() {
//     const {courseId}=useParams();
//     const modulesList=modules.filter((module)=> module.course === courseId);
//     const [selectedModule,setSelectedModule] = useState(modulesList[0]);
//     return (
//         <div className="flex-fill pe-5">
//             <div className="d-flex justify-content-end">
//                 <button className="btn btn-light m-1">Collapse All</button>
//                 <button className="btn btn-light m-1">View Progress</button>
//                 <button className="btn btn-light dropdown-toggle m-1">
//                     <FaCheckCircle className="text-success fs-20 mr-5"/>
//                     Publish All
//                 </button>
//                 <button className="btn btn-danger m-1">+ Module</button>
//                 <button className="btn btn-light m-1"><FaEllipsisV/></button>
//             </div>
//             <hr/>
//             <ul className="list-group wd-modules mt-4">
//                 {modulesList.map(module =>(
//                     <li
//                         className="list-group-items"
//                         onClick={() => setSelectedModule(module)}>
//                         <div className="module-header py-3">
//
//                             <span className="me-2 ms-1 cursor-pointer">
// <FaEllipsisV className="fs-20"/>
// </span>
//
//                             <div className="d-inline-flex align-items-center justify-content-center">
//                                 <button className="btn dropdown-toggle me-2"></button>
//                                 <span className="fw-bold cursor-pointer">{module.name}</span>
//                             </div>
//
//                             <span className="float-end pe-2">
// <button className="dropdown-toggle bg-transparent me-3 d-inline-flex align-items-center justify-content-center">
// <FaCheckCircle className="text-success fs-20"/>
// </button>
// <FaPlusCircle className="me-3 fs-20 cursor-pointer grey-color"/>
// <FaEllipsisV className="ms-2 fs-20 cursor-pointer"/>
// </span>
//                         </div>
//                         {selectedModule._id==module._id && (
//                             <ul className="list-group">
//                                 {module.lessons?.map(lesson=> (
//                                     <li className="list-group-items module-li">
//                                         <div className="module-content py-2">
// <span className="me-2 ms-1">
// <FaEllipsisV className="fs-20" style={{marginRight:-13}}/>
// <FaEllipsisV className="fs-20 me-2"/>
// </span>
//                                             {lesson.name}
//                                             <span className="float-end pe-2">
// <FaCheckCircle className="text-success me-3 fs-20 cursor-pointer"/>
// <FaEllipsisV className="ms-2 fs-20 cursor-pointer"/>
// </span>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// export default ModuleList;