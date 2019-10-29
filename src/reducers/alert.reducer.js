import { alertConstants } from '../constants/alert.constants';

export const alert = (state = {}, action) => {
    switch (action.type) {
        case alertConstants.SUCCES:
            return { type: 'failedToFetch', message: action.message };
        case alertConstants.ERROR:
            return { type: 'invalid', message: action.message };
        case alertConstants.CLEAR:
            return {};
        default:
            return state;
    }
};
