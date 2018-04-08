/**
 * Created by Cral-Gates on 2018/4/1.
 */
/**
 * 用户信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : { type: String },                    //用户账号
    pwd: {type: String},                        //密码
    age: {type: Number},                        //年龄
    createDate : { type: Date}                       //最近登录时间
});

module.exports = mongoose.model('User',UserSchema);