import React, {useState} from 'react';
import ITask from "../entities/ITask";
import TodoInput from "../components/TodoInput";

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITask[]>([])

    const addTask = (title: string): void => {
        const newTask: ITask = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos(prev => [newTask, ...prev])
    }

    const toggleTask = (id: number): void => {
        setTodos(prev =>
            prev.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            })
        )
    }

    const deleteTask = (id: number): void => {
        setTodos(prev => prev.filter((task) => task.id !== id))
    }

    return (
        <React.Fragment>
            <TodoInput addTask={addTask}/>
        </React.Fragment>
    )
}

export default TodosPage;