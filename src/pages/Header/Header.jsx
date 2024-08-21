import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const btns = document.querySelectorAll("button")
        btns.forEach(item => {
            item.style.cssText = (this.props.mode ? `
    color: rgb(80,40,40);
  background-color: rgb(252, 244, 219);
    `: `
    color: rgb(255, 221, 198);
    background-color: rgb(0, 0, 0);
    `)
        }
        )
    }
    render() {
        return (
            <div className='header'>
                <div className='container text-center header-bg flex-row align-items-center gap-10'>
                    <h1 className='capitalize'>what do you want to do today?</h1>
                    <Link to="/todos"> <button className={(this.props.mode ? "dark" : "light")}>let's start</button></Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mode: state.settings.mode
    }
}
export default connect(mapStateToProps)(Header)
