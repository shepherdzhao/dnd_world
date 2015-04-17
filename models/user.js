var mongoose = require('./db.js');

//创建对象Schema
var userSchema = new mongoose.Schema({
    name: {type: String, unique:true},
    password: String,
    email: String,
    createdOn: {type: Date, default: Date.now()},
    lastModified: Date,
    lastLogin: Date
}, {
    collection: 'users'  //可以和Model名称小写加复数不同，需要在Model第三个参数中指明
});

//生成一个Model
var userModel = mongoose.model('User', userSchema);

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
};

//存储用户信息
User.prototype.save = function(callback) {
    var user = {
        name: this.name,
        password: this.password,
        email: this.email
    };

    var newUser = new userModel(user);

    newUser.save(function(err, user) {
        if(err) {
            return callback(err);
        }
        callback(null, user);
    });
};

User.get = function(name, callback) {
    userModel.findOne({name:name}, function(err, user) {
        if(err) {
            return(callback(err));
        }
        callback(null, user);
    });
};

User.getByEmail = function(email, callback) {
    userModel.findOne({email:email}, function(err, user) {
        if(err) {
            return(callback(err));
        }
        callback(null, user);
    });
};

module.exports = User;