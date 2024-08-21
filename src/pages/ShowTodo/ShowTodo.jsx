import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Todo from '../../components/Todo/Todo';
import { fetchDataSuccess, updateCompletedTodos } from '../../Redux/Todos/TodosActions';
class ShowTodo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='container flex-row justify-between align-items-center' style={{ border: "solid 1px " + (this.props.mode ? "rgb(255, 221, 198)" : "rgb(80,40,40)"), borderRadius: "50px", marginTop: "30px", padding: "0px 30px" }}>
                <div className="flex-row">
                    <input type="checkbox" checked={this.props.todo.completed} name={this.props.todo.title} id={this.props.todo.id} onChange={() => {
                        this.props.updateCompletedTodos(this.props.todo.id, this.props.todo.completed)
                        this.props.todo.completed = !this.props.todo.completed
                        console.log(this.props.todo);

                    }} />
                    <label htmlFor={this.props.todo.id}><h1> {this.props.todo.title}</h1></label>
                </div>
                <div>
                    <Link to={"/todos"}><button className={(this.props.mode ? "dark" : "light")} onClick={() => this.props.setTodos(this.props.todos.filter((todo) => todo.id != this.props.todo.id))}>delete</button></Link>
                    <Link to={"./edit"}><button className={(this.props.mode ? "dark" : "light")} style={{ margin: "30px" }} >update</button></Link>
                </div>
            </div >
        )
    }
}
const mapStatesToProps = (state) => {
    const { id } = useParams()
    return {
        mode: state.settings.mode,
        todos: state.todos.todos,
        todo: state.todos.todos.find(todo => id == todo.id)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateCompletedTodos: (todoId, value) => dispatch(updateCompletedTodos(todoId, value)),
        setTodos: (todos) => dispatch(fetchDataSuccess(todos))
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(ShowTodo)