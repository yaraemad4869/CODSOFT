import { Outlet } from "react-router-dom"
import React from 'react'
import { fetchTodos } from "../../Redux/Todos/TodosActions"
import { connect } from 'react-redux'
import Nav from "../../components/Nav/Nav"
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: props.fetchTodos() };
    }

    render() {
        return (
            <>
                <Nav />
                <Outlet />
            </>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        todos: state.todos.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: () => dispatch(fetchTodos())
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(Layout)

