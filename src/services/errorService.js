import * as authActions from '../store/actions/auth';
import store from '../store';

var errorService = {
  checkErrors: function (data) {
    if (data && data.message) {
      let message = data.message;
      if (typeof message === 'string' || message instanceof String) {
        message = message.toLowerCase();
        if (message === 'network request failed') {
          return {status: false, msg: 'Please check your network connection.'};
        }
      }
    }

    return data;
  },

  checkSession: function (data) {
    let message = data.msg;
    // console.log(message, typeof message);
    if (typeof message === 'string' || message instanceof String) {
      message = message ? message.toLowerCase() : '';
      if (message === 'mobile number or token wrong.') {
        store.dispatch(authActions.sessionExpired(true));
        return {...data, sessionExpired: true};
      }
    }

    return {...data, sessionExpired: false};
  },
};

export default errorService;
