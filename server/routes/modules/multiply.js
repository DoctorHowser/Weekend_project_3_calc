/**
 * Created by danesmith on 10/30/15.
 */
var parse = require('./makeNumber');

var multiplyNumbers = function(data){
    data = parse(data);
    return (data.val1 * data.val2);
};

module.exports = multiplyNumbers;