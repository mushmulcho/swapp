import { TOGGLE_THEME } from './constants/theme.constants';

export const rootReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME: {
            return { ...state, theme: action.theme };
        }
        default:
            return state;
    }
};
