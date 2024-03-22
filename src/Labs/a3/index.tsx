//2.1.3 Breaking out assignments into separate components

import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment3() {
    const { todos } = useSelector((state: LabState) => state.todosReducer);

    return (
        <div className="container">
            <h1>Assignment 3</h1><br/><br/>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul><br/><br/>
            <ConditionalOutput/><br/><br/>
            <Styles/><br/><br/>
            <Classes/><br/><br/>
            <PathParameters/><br/><br/>
            <JavaScript/><br/><br/>
            <Classes/><br/><br/>

            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight><br/><br/>

            <Add a={3} b={4} /><br/><br/>

            <TodoList/>

        </div>
    );
}
export default Assignment3;

