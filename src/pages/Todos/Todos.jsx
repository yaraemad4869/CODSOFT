import React from 'react'
import Todo from '../../components/Todo/Todo'
import './Todos.css'
import { connect } from 'react-redux'
class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return true;
    }
    // const navigate = useNavigation();
    // const todos = useSelector((state) => state.todos.todos)
    // componentDidMount() {
    //     const completed = document.querySelectorAll("input:checked+label>h1")
    //     completed.forEach(item => {
    //         item.style.cssText = (this.props.mode ? `
    // color: rgba(252, 244, 219,0.7);
    // `: `
    // color: rgba(0, 0, 0,0.7);
    // `)
    //     }
    //     )
    // }
    render() {
        return (
            <div className='container' style={{ marginTop: "10px" }}>
                {
                    (this.props.todos == null ? null : this.props.todos.map(todo => {
                        // return {
                        return <Todo key={todo.id} todo={todo} />
                        // }
                    })
                    )
                }
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
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchTodos: () => dispatch(fetchTodos())
//     }
// }
export default connect(mapStatesToProps/*, mapDispatchToProps*/)(Todos)
