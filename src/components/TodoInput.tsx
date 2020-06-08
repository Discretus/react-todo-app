import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoS } from '../redux/todos/todoActions';

const TodoInput = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const pressEnter = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' && ref.current!.value.trim()) {
      const text = ref.current!.value;
      dispatch(addTodoS(text));
      ref.current!.value = '';
    }
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          ref={ref}
          onKeyPress={pressEnter}
          type="text"
          placeholder="Enter new task"
        />
      </div>
    </div>
  );
};

export default TodoInput;
