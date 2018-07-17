/**
 * @author Nickyzhang
 * @date 2018/7/14
 * @description file templates
 */
// const $ = window.jQuery;

export default function toast (msg) {
  $(`<div class="tn-toast"><span class="tn-toast--text">${msg}</span></div>`)
    .appendTo('body').delay(2000)
    .fadeOut(400, function () {
      $(this).remove()
    })
}
