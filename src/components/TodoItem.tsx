import React, { CSSProperties } from 'react';
import { Todo } from '../modules/todos';

// props 타입 지정
type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}
const TodoItem = ({todo, onToggle, onRemove}: TodoItemProps) => {
    const handleToggle = () => onToggle(todo.id)
    const handleRemove = () => onRemove(todo.id)
    const textStyle: CSSProperties = {
        textDecoration: todo.done ? 'line-through' : 'none'
    }
    const removeStyle: CSSProperties = {
        color: 'red',
        marginLeft: 8
    }
    return (
        <li>
            <span onClick={handleToggle} style={textStyle}>{todo.text}</span>
            <span onClick={handleRemove} style={removeStyle}>X</span>
        </li>
    );
};

export default TodoItem;