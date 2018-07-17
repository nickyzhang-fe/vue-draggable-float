/**
 * @author Nickyzhang
 * @date 2018/7/13
 * @description file templates
 */
/**
 * 微信
 * @returns {boolean}
 */
export function isWeiXin () {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger' || ua.indexOf('micromessenger') > -1) {
    return true
  }
  return false
}
/**
 * iOS
 * @returns {boolean}
 */
export function isIos () {
  let mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    return true
  }
  return false
}
/**
 * android
 * @returns {Array|{index: number, input: string}}
 */
export function isAndroid () {
  return window.navigator.appVersion.match(/android/ig)
}


export function isPc() {
  return document.body.offsetWidth > 640
}

export function isDomVisible(id) {
  var clientHeight = document.body.clientHeight;
  var top = document.getElementById(id).getBoundingClientRect().top;
  if (top - clientHeight < 0) return true;
  return false;
}
