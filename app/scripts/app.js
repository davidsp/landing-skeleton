
exports.hello = function(){
    $(function() {
        console.log('ad');
        var index = _.template(document.getElementById('index').innerHTML);
        $('#site').append(index({}));
    });
      return 'Hello World!';
}