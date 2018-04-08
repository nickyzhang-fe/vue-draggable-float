/**
 * Created by Cral-Gates on 2018/4/1.
 */

var User = require("../db/user");
/**
 * 插入
 */
function insert() {
    console.log('insert');
    var user = new User({
        username: 'Nickyzhang',                 //用户账号
        pwd: 'nicky',                            //密码
        age: 20,                                //年龄
        createDate: new Date()                      //最近登录时间
    });

    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }
    });
}

/*
 * 更新
 * */

function update() {
    console.log('update');
    var wherestr = {'username': 'Tracy McGrady'};
    var updatestr = {'username': '1231212', 'pwd':'tracy'};

    User.update(wherestr, updatestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }
    })
    db.close();
}

/**
 * 查找
 * */
function findByIdAndUpdate(){
    console.log('find');
    var id = '5ac0a79625a3ab095f12ad4d';
    var updatestr = {'pwd': '12345678'};

    User.findByIdAndUpdate(id, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    db.close();
}

/**
 * 删除
 * */
function del(){
    console.log('delete');
    var wherestr = {'_id' : '5ac0a84eb5893f096ad46e83'};

    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + JSON.parse(res));
        }
    })
    db.close();
}

// insert();
module.exports = {
    insert: insert,
    update: update,
    findByIdAndUpdate: findByIdAndUpdate,
    del:del
}