import * as ActionTypes from "./ActionTypes"
const intialState = {
    mode: false
}
export const SettingsReducer = (state = intialState, { type }) => {
    switch (type) {
        case ActionTypes.CHANGE_MODE:
            return {
                ...state,
                mode: !state.mode
            };

        default:
            return state;
    }
}