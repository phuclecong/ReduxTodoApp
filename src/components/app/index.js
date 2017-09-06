import React, { Component } from 'react';
import './style.css';
import TodoList from '../../containers/TodoList';
import AddTodo from '../../containers/AddTodo';
import FilterLink from '../../containers/FilterLink';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AddTodo />
                <TodoList />

                <div>
                    <FilterLink filter="SHOW_ALL">All</FilterLink>
                    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
                    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
                </div>
            </div>
        );
    }
}

export default App;
