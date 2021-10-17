let mix = require("laravel-mix");

mix
	.js("resources/js/theme.js", "dist/js")
	.sass("resources/sass/dark.scss", "dist/css")
	.copy("resources/css/manage-it-pro-ltd-theme.css", "dist/css")
	.copy("resources/css/responsive.css", "dist/css");
