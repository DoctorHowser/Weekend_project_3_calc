/**
 * Created by danesmith on 10/30/15.
 */
var add = require('./add');
var subtract = require('./subtract');
var multiply = require('./multiply');
var divide = require('./multiply');



var message = function(data){
    var type = data.type;
    switch (type) {
        case 'add':
            add(data);
            break;
    }
};










module.exports = message;