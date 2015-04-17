var User = require('../models/user.js');
var crypto = require('crypto');

function UserService() {
};

UserService.checkUserExist = function(req, res) {
    User.get(req.body.name, function(err, user) {
       if(err) {
           res.json({status: -1, msg: err});
       } else {
           if(user) {
               res.json({status: 1, msg: 'msg_user_exist'});
           } else {
               res.json({status:0, msg:'msg_user_not_exist'});
           }
       }
    });
};

UserService.checkEmailExist = function(req, res) {
    User.getByEmail(req.body.email, function(err, user) {
        if(err) {
            res.json({status: -1, msg: err});
        } else {
            if(user) {
                res.json({status: 1, msg: 'msg_email_exist'});
            } else {
                res.json({status:0, msg:'msg_email_not_exist'});
            }
        }
    });
};

UserService.register = function(req, res) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('hex');
    var newUser = new User({
        name: req.body.name,
        password: password,
        email: req.body.email
    });

    User.get(newUser.name, function(err, user) {
        if(err) {
            res.json({status: -1, msg: err});
        } else {
            if(user) {
                res.json({status: -1, msg: 'msg_err_user_exist'});
            } else {
                newUser.save(function(err, user){
                    if(err) {
                        res.json({status: -1, msg: err});
                    } else {
                        res.json({status: 1, msg: 'msg_register_success'});
                    }
                });
            }
        }
    });
};

UserService.login = function(req, res) {
    User.get(req.body.name, function(err, user) {
        if(err) {
            res.json({status: -1, msg: err});
        } else {
            if(!user) {
                res.json({status: -1, msg: 'msg_err_user_not_exist'});
            } else {
                var md5 = crypto.createHash('md5');
                var password = md5.update(req.body.password).digest('hex');
                if(user.password != password) {
                    res.json({status: -1, msg: 'msg_err_wrong_password'});
                } else {
                    res.json({status: 1, msg: 'msg_login_success'});
                }
            }
        }
    });
};

module.exports = UserService;