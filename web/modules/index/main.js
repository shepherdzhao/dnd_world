var config = {};
config.urlArgs = "";
config.baseUrl = "./";
config.paths = {
	jquery: "vendor/jquery/jquery.min",
	avalon: "vendor/avalon/avalon",
	//mmRequest: "vendor/avalon/mmRequest",
	//mmHistory: "vendor/avalon/mmHistory",
	//mmRouter: "vendor/avalon/mmRouter",
	//mmPromise: "vendor/avalon/mmPromise",
	//mmState: "vendor/avalon/mmState",
	bootstrap: "vendor/bootstrap/bootstrap.min"
};
config.shim = {
	jquery: {
		exports: "jQuery"
	},
	bootstrap: {
		deps: ['jquery'],
		exports: "bootstrap"
	},
	avalon: {
		exports: "avalon"
	}
//	mmRequest: {
//		deps: ['avalon'],
//		exports: "mmRequest"
//	},
//	mmHistory: {
//		deps: ['avalon'],
//		exports: "mmHistory"
//	},
//	mmRouter: {
//		deps: ['mmHistory'],
//		exports: "mmRouter"
//	},
//	mmState: {
//		deps: ['mmPromise', 'mmRouter'],
//		exports: "mmState"
//	}
};
require.config(config);
require(["jquery","modules/index/start","bootstrap"], function() {
	avalon.ready(function() {
	})
});