var mongoose = require( 'mongoose' );
var settings = require('../settings');

// Create the database connection
var db_uri = 'mongodb://' + settings.db_admin + ':' + settings.db_password + '@' + settings.db_url + ':'
    + settings.db_port + '/' + settings.db_name;

mongoose.connect(db_uri);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + settings.db_name);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;