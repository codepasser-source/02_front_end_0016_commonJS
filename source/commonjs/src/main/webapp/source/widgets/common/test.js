console.log("loading test js")
define("test", function(require, exports, module) {
	console.log("test js>>>")

	var o = {};

	o.confirm = function(str) {
		return confirm(str);
	};

	o.date = function() {
		var b = require("ellenchia");
		return alert(b.date);
	}

	module.exports = o;
})
console.log("loaded test js")