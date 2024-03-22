import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
    return(
        <div>
            <h2>Redux Examples</h2>
            <AddRedux/><br/><br/>
            <CounterRedux/><br/><br/>
            <HelloRedux/><br/><br/>
            <TodoList/><br/><br/>
        </div>
    );
};

export default ReduxExamples;