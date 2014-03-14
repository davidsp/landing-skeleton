var tpl = require("templates/index");

var IndexPage = (function() {
    $('#content').html(tpl({}));
})();

module.exports = IndexPage;