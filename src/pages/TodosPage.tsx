import React, {useState} from 'react';
import ITodo from "../entities/ITodo";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const addTodo = (title: string): void => {
        const newTodo: ITodo = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleTodo = (id: number): void => {
        setTodos(prev =>
            prev.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        )
    }

    const deleteTodo = (id: number): void => {
        setTodos(prev => prev.filter((todo) => todo.id !== id))
    }

    return (
        <React.Fragment>
            <TodoInput addTodo={addTodo}/>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </React.Fragment>
    )
}

export default TodosPage;