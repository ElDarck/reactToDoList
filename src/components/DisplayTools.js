import React, {useState} from "react";
import {connect} from "react-redux";
import {
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos,
    setTodosDate
} from "../redux/reducer";
import TodoItem from "./todoitem";
import {AnimatePresence} from "framer-motion";

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
        setTodoDate: (obj) => dispatch(setTodosDate(obj))
    };
};

const DisplayTodos = (props) => {
    const [sort, setSort] = useState("all");
    return (
        <div className="displaytodos">
            <div className="buttons">

                <button onClick={() => setSort("active")}>
                    Активные
                </button>

                <button onClick={() => setSort("complete")}>
                    Завершенные
                </button>

                <button onClick={() => setSort("all")}>
                    Все
                </button>
            </div>

            <ul>
                <AnimatePresence>
                {props.todos.length > 0 && sort === "active"
                ? props.todos.map((item) => {
                    return (
                        item.completed === false && (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    );
                    }) : null}

                {props.todos.length > 0 && sort === "complete"
                ? props.todos.map((item) => {
                    return (
                        item.completed === true && (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    )
                    }) : null}

                {props.todos.length > 0 && sort === "all"
                ? props.todos.map((item) => {
                    return (
                        <TodoItem
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    )
                    }) : null};
                </AnimatePresence>
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);