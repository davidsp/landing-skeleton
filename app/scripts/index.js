var indexTpl = require('templates/index');

exports.index = function(){
    alert('af')
    var mark = indexTpl({})
    $('#site').append(mark);
}