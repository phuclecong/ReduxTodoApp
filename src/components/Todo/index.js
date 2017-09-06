import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style.css';

class Todo extends Component {
    render() {
        const { onClick, completed, text } = this.props;

        return (
            <li className={completed ? 'todo todo_status_completed' : 'todo'} onClick={onClick}>
                {text}
            </li>
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;
