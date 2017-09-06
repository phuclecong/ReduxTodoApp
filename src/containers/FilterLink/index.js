import { connect } from 'react-redux'
import { setVisibilityFilter } from './action'
import FilterLink from '../../components/FilterLink'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const Connection = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink)

export default Connection;
