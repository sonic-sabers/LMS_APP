import { ACCOUNT_INFO, SESSION_EXPIRED,LANGUAGE_UPDATE } from '../actions/auth';

const initialState = {
    filesBasePath: 'https://dezensolutions.com/apis/lms/uploads/',
    accountInfo: null,
    token: null,
    email: null,
    mobileNo: null,
    fullName: null,
    sessionExpired: true,
    language:'en'
};

export default (state = initialState, action) => {

    switch (action.type) {

        case ACCOUNT_INFO:
            return {
                ...state,
                token: action.data.token,
                email: action.data.email,
                mobileNo: action.data.mobileNo,
                fullName: action.data.fullName
            };

        case SESSION_EXPIRED:
            return {
                ...state,
                sessionExpired: action.data
            };

            case LANGUAGE_UPDATE:
                return {
                    ...state,
                    language: action.data
                };
    

        default:
            return state;
    }
};
