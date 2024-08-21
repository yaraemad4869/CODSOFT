import * as ActionTypes from "./ActionTypes";
export const initialState = {
    mode: false,
    loading: true,
    count: 10
};
export const SettingsReducer = (state = initialState, { type }) => {
    switch (type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case ActionTypes.CHANGE_MODE:
            return {
                ...state,
                mode: !state.mode
            };

        default:
            return state;
    };
};