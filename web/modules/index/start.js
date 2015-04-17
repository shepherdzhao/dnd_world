define(["avalon"], function(avalon) {
	var registervm = avalon.define({
		$id: "registerCtl",
		register_click: function() {
			alert("register_click");
		}
	});
	avalon.scan(window.document.getElementById("register"), registervm);
	
	var loginvm = avalon.define({
		$id: "loginCtl"
	});
	avalon.scan(window.document.getElementById("login"), loginvm);
	
	return avalon;
})