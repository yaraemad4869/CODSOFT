import React from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateTodos } from '../../Redux/Todos/TodosActions'
class UpdateTodo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className='container'>

                <input type='text' name={"Edit To-Do " + this.props.todo.id} onChange={(e) => {
                    // this.props.todo.title = e.target.value
                }} id={this.props.todo.id} style={{ width: "100%", height: "80px", borderRadius: "50px", margin: "20px 0px", paddingLeft: "30px" }} />
                <Link to={"/todos"}><button className={(this.props.mode ? "dark" : "light")} onClick={() => {
                    this.props.todo.title = document.getElementById(this.props.todo.id).value
                    this.props.updateTodos(this.props.todo.id, document.getElementById(this.props.todo.id).value)

                    // this.props.updateTodos(this.props.todo.id, e.previousSibling.value)
                    // this.props.todo.title = e.previousSibling.value
                }}>save</button></Link>
            </div>
        )
    }
}
const mapStatesToProps = (state) => {
    const { id } = useParams()
    console.log(id);

    return {
        todos: state.todos.todos,
        mode: state.settings.mode,
        todo: state.todos.todos.find(todo => id == todo.id)
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        updateTodos: (todoId, value) => dispatch(updateTodos(todoId, value))
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(UpdateTodo)
