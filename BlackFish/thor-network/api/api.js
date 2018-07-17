/**
 * @author Nickyzhang
 * @date 2018/7/13
 * @description file templates
 */
import axios from './axios';
/**
 * 邮件订阅
 * @param params
 */
export const EMAIL_SUBSCRIBE = (params) => {
  return axios.request({
    url: `/blockchainfrontserv-web/userMail/v1/subscribe`,
    method: 'post',
    data: params
  })
};
