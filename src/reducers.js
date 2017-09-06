import { combineReducers } from 'redux';
import todos from './containers/TodoList/reducer';
import visibilityFilter from './containers/FilterLink/reducer';

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
