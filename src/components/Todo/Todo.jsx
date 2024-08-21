import React from 'react'
import './Todo.css'
// import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDataSuccess, updateCompletedTodos } from '../../Redux/Todos/TodosActions'
import { Link } from 'react-router-dom';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    // const navigate = useNavigate()
    // const [value, setValue] = useState(false)
    // console.log(props);
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return (
            <div className='flex-row justify-between align-items-center' style={{ border: "solid 1px " + (this.props.mode ? "rgb(255, 221, 198)" : "rgb(80,40,40)"), borderRadius: "50px", marginTop: "30px", padding: "0px 30px" }}>
                <div className="flex-row">
                    <input type="checkbox" checked={this.props.todo.completed} name={this.props.todo.title} id={this.props.todo.id} onChange={() => {
                        this.props.updateCompletedTodos(this.props.todo.id, this.props.todo.completed)
                        this.setState({ todo: { ...this.props.todo, completed: !this.props.todo.completed } })
                    }} />
                    <label htmlFor={this.props.todo.id}><h1> {this.props.todo.title}</h1></label>
                </div>
                <div>
                    <button className={(this.props.mode ? "dark" : "light")} onClick={() => this.props.setTodos(this.props.todos.filter((todo) => todo.id != this.props.todo.id))}>delete</button>
                    <Link to={"./" + this.props.todo.id + "/edit"}><button className={(this.props.mode ? "dark" : "light")} style={{ margin: "30px" }}>update</button></Link>
                    <Link to={"./" + this.props.todo.id}><button className={(this.props.mode ? "dark" : "light")} >show</button></Link>
                </div >
            </div>
        )
    }
}
const mapStatesToProps = (state) => {
    return {
        todos: state.todos.todos,
        mode: state.settings.mode
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateCompletedTodos: (todoId, value) => dispatch(updateCompletedTodos(todoId, value)),
        setTodos: (todos) => dispatch(fetchDataSuccess(todos))
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(Todo)
