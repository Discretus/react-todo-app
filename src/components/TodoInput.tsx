import React from 'react';

interface TodoInputProps {
    addTask(title: string): void
}

const TodoInput: React.FC<TodoInputProps> = ({addTask}) => {
    return (
        <div className="row">
            <div className="input-field col s9">
                <input type="text" placeholder="Enter new task"/>
            </div>
            <button className="mt-5 waves-effect waves-light btn col s3">button</button>
        </div>
    )
}

export default TodoInput;