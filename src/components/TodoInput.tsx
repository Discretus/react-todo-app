import React, {useRef} from 'react';

interface TodoInputProps {
    addTodo(title: string): void
}

const TodoInput: React.FC<TodoInputProps> = ({addTodo}) => {
    const ref = useRef<HTMLInputElement>(null)

    const pressEnter = (event: React.KeyboardEvent): void => {
        if (event.key === "Enter" && ref.current!.value.trim()) {
            const title = ref.current!.value;
            addTodo(title)
            ref.current!.value = "";
        }
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    ref={ref}
                    onKeyPress={pressEnter}
                    type="text"
                    placeholder="Enter new task"/>
            </div>
        </div>
    )
}

export default TodoInput;