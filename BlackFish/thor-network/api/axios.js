/**
 * @author Nickyzhang
 * @date 2018/7/13
 * @description file templates
 */
import axios from 'axios';
import {Base64} from 'js-base64';
import {BASE_URL} from './config';

const request = (options) => {
  return new Promise((resolve, reject) =>{
    let instance = axios.create({
      timeout: 15000,
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    instance(options)
      .then(res => {
        resolve(Base64.decode(res.data));
      })
      .catch(err => {
        console.log(err);
        reject(Base64.decode(err.data));
      })
  })
};

export default {
  request: request
};
