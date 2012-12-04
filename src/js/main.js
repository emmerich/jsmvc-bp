require.config({
	modules: [{
		name: "main",
		include: ["almond", "main"]
	}],

	paths: {
		"jquery": "lib/jquery/jquery",
		"underscore": "lib/underscore/underscore",
		"backbone": "lib/backbone/backbone",
		"text": "lib/requirejs/text",
		"almond": "lib/requirejs/almond"
	},

	shim: {
		'backbone' : {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require(['app', 'jquery'], function(app, $) {
	$(function() { app(); })
});