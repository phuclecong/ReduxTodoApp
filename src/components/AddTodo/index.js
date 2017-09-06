import React, { Component } from 'react';

class AddTodo extends Component {
    getText() {
        const text = this.input.value.trim();

        this.input.value = '';
        return text;
    }

    render() {
        const { onSubmit } = this.props;

        return (
            <form onSubmit={(e) => onSubmit(e, this.getText())}>
                <input ref={node => {
                    this.input = node
                }}/>

                <button type="submit">
                    Add Todo
                </button>
            </form>
        );
    }
}

export default AddTodo;
