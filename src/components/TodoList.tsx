import React from "react";
import ITodo from "../entities/ITodo";

interface TodoListProps {
    todos: ITodo[]

    toggleTodo(id: number): void

    deleteTodo(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, deleteTodo}) => {
    if (todos.length === 0) {
        return <p className="center no-select">No todos</p>
    }

    return (
        <ul>
            {todos.map((todo) => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text no-select" onClick={() => deleteTodo(todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )

}

export default TodoList;