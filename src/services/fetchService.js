import apiService from './apiService';
import errorService from './errorService';
import queryService from './queryService';
import * as localStorage from './localStorage';
var RNFS = require('react-native-fs');
import {Platform} from 'react-native';

var fetchService = {
  uploadFile: async function (customerType, file) {
    let API = apiService.customerFileUpload;
    if (customerType === 'dealer') API = apiService.dealerFileUpload;

    // console.log(file);
    try {
      var bodyFormData = new FormData();
      file.map(eachFile => {
        let fileName = eachFile.split('/').pop();
        let extension = eachFile.split('.').pop();
        bodyFormData.append('file', {
          name: fileName,
          type: 'image/' + extension,
          uri:
            Platform.OS === 'android'
              ? eachFile
              : eachFile.replace('file://', ''),
        });
      });

      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Content-Type': 'multipart/form-data',
        },
        body: bodyFormData,
      });

      const resData = await response.json();
      // console.log('res',resData)
      if (!resData.success) {
        const message = resData.message;
        const errorRes = {
          status: false,
          data: message,
          code: resData.status,
          msg: message,
        };
        const sessionResp = errorService.checkSession(errorRes);
        return sessionResp;
      }
      return {status: true, data: resData};
    } catch (e) {
      var res = errorService.checkErrors(e);

      if (
        res &&
        typeof res === 'object' &&
        res.constructor === Object &&
        res.hasOwnProperty('status')
      ) {
        return res;
      }
      throw e;
      // return { status: false, msg: "Something Went wrong" };
    }
  },

  login: async function (email, password) {
    let API = apiService.login;
    try {
      let params = {
        email: email,
        password: password,
      };
      console.log(params);
      let queryParams = queryService.preareQueryParams(params);
      // console.log(queryParams);
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: queryParams,
      });

      const resData = await response.json();
      console.log(resData);
      if (!resData.success) {
        const message = resData.msg;
        const errorRes = {
          status: false,
          data: message,
          code: resData.success,
          msg: message,
        };
        const sessionResp = errorService.checkSession(errorRes);
        return sessionResp;
      }
      return {status: true, data: resData.data};
    } catch (e) {
      var res = errorService.checkErrors(e);

      if (
        res &&
        typeof res === 'object' &&
        res.constructor === Object &&
        res.hasOwnProperty('status')
      ) {
        return res;
      }
      throw e;
    }
  },
};
// console.log(sentUserOtp);
export default fetchService;
