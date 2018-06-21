console.log("loading ellenchia js")
define("ellenchia", function(require, exports, module) {

	console.log("ellenchia js>>>")

	var b = require("test");
	var o = {};
	var name = "ellenchia";

	o.init = function(str) {
		b.confirm(name + str);
	}

	o.date = new Date();

	module.exports = o;

});
console.log("loaded ellenchia js")