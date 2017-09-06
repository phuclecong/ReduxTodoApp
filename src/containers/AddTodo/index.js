import { connect } from 'react-redux';
import { addTodo } from '../TodoList/action';
import AddTodo from '../../components/AddTodo';

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (e, text) => {
            e.preventDefault();

            if(text.length) {
                dispatch(addTodo(text));
            }
        }
    }
}

const Connection = connect(
    null,
    mapDispatchToProps
)(AddTodo)

export default Connection
