import React, {useState} from 'react';
import {connect} from "react-redux";
import {addTodos} from "../redux/reducer";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const add = () => {
        if (todo === '') {
            alert ('Введите текст')
        } else {
            props.addTodo({
                id: Math.floor(Math.random()*1000),
                item: todo,
                completed: false,
                date: [],
            });
            setTodo('');
        }
    };

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className = "addTodos">

            <input
                type='text'
                onChange={(e) => handleChange(e)}
                className="todo-input"
                value={todo}
            />
            <button className="addButton" onClick={() => add()}>
                Добавить
            </button>

        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);