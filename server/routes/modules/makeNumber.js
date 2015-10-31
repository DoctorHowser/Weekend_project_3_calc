/**
 * Created by danesmith on 10/30/15.
 */
var makeNumbers = function(data){
  data.val1 = Number(data.val1);
  data.val2 = Number(data.val2);
    return data;
};

module.exports = makeNumbers;