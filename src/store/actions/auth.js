import AsyncStorage from '@react-native-async-storage/async-storage';

export const ACCOUNT_INFO = "ACCOUNT_INFO";
export const SESSION_EXPIRED = "SESSION_EXPIRED";
export const LANGUAGE_UPDATE ="LANGUAGE_UPDATE"

export const accountInfo = (data) => {
    return { type: ACCOUNT_INFO, data:data  };
};

export const languageUpdate = (status) => {
    return { type: LANGUAGE_UPDATE, data:status  };
};



export const sessionExpired = (status) => {
    return { type: SESSION_EXPIRED, data:status  };
};

export const logout = () => {

    const data = {
        token: null,
        email: null,
        mobileNo: null,
        fullName: null
    }

    return async dispatch => {
        dispatch(sessionExpired(true));
        dispatch(accountInfo(data));
        // dispatch(languageUpdate(language));
        deleteDataFromStorage('userData');
    };
    
}

const deleteDataFromStorage = (key) => {
    AsyncStorage.removeItem(key);
};