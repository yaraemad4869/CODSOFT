import React from 'react'
import { connect } from 'react-redux'
import { changeMode } from "../../Redux/Settings/SettingsActions"
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     mode: props.mode
        // }
    }
    shouldComponentUpdate() {
        return true;
    }
    // changeModeHandler = () => {
    //     this.props.changeMode()
    //     this.setState({ mode: this.props.mode })
    // }
    render() {
        return (
            <div className={this.props.mode}>
                <div className="container flex-row align-items-baseline justify-between">
                    <NavLink to={"/"}> <h2 className="uppercase">todoz</h2></NavLink>
                    <button className={(this.props.mode ? "dark" : "light")} onClick={() => this.props.changeMode()} value={(this.props.mode ? "Dark" : "Light")}>{(this.props.mode ? "Dark" : "Light")}</button>
                </div >
            </div>
        )
    }
}
const PassStateToProps = (state) => {
    return {
        mode: state.settings.mode
    }
}
const PassDispatchToProps = (dispatch) => {
    return {
        changeMode: () => dispatch(changeMode())
    }
}

export default connect(PassStateToProps, PassDispatchToProps)(Nav)

