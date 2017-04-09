module("core");

test("Basic requirements", function() {
	expect(7);
	ok( Array.prototype.push, "Array.push()" );
	ok( Function.prototype.apply, "Function.apply()" );
	ok( document.getElementById, "getElementById" );
	ok( document.getElementsByTagName, "getElementsByTagName" );
	ok( RegExp, "RegExp" );
	ok( jQuery, "jQuery" );
	ok( $, "$()" );
});

test("length", function() {
	ok( $("div").length == 2, "Get Number of Elements Found" );
});

test("size()", function() {
	ok( $("div").size() == 2, "Get Number of Elements Found" );
});

test("get()", function() {
	isSet( $("div").get(), q("main","foo"), "Get All Elements" );
});
