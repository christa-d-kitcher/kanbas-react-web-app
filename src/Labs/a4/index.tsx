import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "../a4/ReduxExamples";
import "../../libs/bootstrap/bootstrap.min.css";


const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return(
        <div className={"container"}>
            <h1>Assignment 4</h1><br/><br/>
            <ReduxExamples/><br/><br/>

            <ClickEvent /><br/><br/>
            <PassingDataOnEvent /><br/>
            <PassingFunctions theFunction={sayHello} /><br/><br/>
            <EventObject/><br/><br/>
            <Counter/><br/><br/>
            <BooleanStateVariables/><br/><br/>
            <StringStateVariables/><br/><br/>
            <DateStateVariable/><br/><br/>
            <ObjectStateVariable/><br/><br/>
            <ArrayStateVariable/><br/><br/>


        </div>
    );
};
export default Assignment4;