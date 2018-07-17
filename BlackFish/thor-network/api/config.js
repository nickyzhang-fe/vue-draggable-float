/**
 * @author Nickyzhang
 * @date 2018/7/13
 * @description file templates
 */
/**
 * 基础地址
 */
export const BASE_URL = config({
  sit: 'http://10.32.16.37:10701',
  prod: 'https://api-lmf.blackfish.cn/'
});

/**
 * 环境配置
 * @param base
 * @returns {*}
 */
function config(base = {}) {
  console.log(process.env.NODE_ENV)
  var env = process.env.NODE_ENV || 'sit'
  return base[env]
}
