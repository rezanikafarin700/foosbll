<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="scss">
	@font-face {
		font-family: Dastnevis;
		src: url('../public/font/dastnevis/dastnevis.otf');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: Vazir;
		src: url('../public/font/Vazir-Regular.eot');
		src: url('../public/font/Vazir-Regular.eot?#iefix') format('embedded-opentype'),
		url('../public/font/Vazir-Regular.woff2') format('woff2'),
		url('../public/font/Vazir-Regular.woff') format('woff'),
		url('../public/font/Vazir-Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: Vazir;
		src: url('../public/font/Vazir-Bold.eot');
		src: url('../public/font/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
		url('../public/font/Vazir-Bold.woff2') format('woff2'),
		url('../public/font/Vazir-Bold.woff') format('woff'),
		url('../public/font/Vazir-Bold.ttf') format('truetype');
		font-weight: bold;
		font-style: normal;
	}
	@font-face {
		font-family: Vazir;
		src: url('../public/font/Vazir-Black.eot');
		src: url('../public/font/Vazir-Black.eot?#iefix') format('embedded-opentype'),
		url('../public/font/Vazir-Black.woff2') format('woff2'),
		url('../public/font/Vazir-Black.woff') format('woff'),
		url('../public/font/Vazir-Black.ttf') format('truetype');
		font-weight: 900;
		font-style: normal;
	}
	@font-face {
		font-family: Vazir;
		src: url('../public/font/Vazir-Medium.eot');
		src: url('../public/font/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
		url('../public/font/Vazir-Medium.woff2') format('woff2'),
		url('../public/font/Vazir-Medium.woff') format('woff'),
		url('../public/font/Vazir-Medium.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: Vazir;
		src: url('../public/font/Vazir-Light.eot');
		src: url('../public/font/Vazir-Light.eot?#iefix') format('embedded-opentype'),
		url('../public/font/Vazir-Light.woff2') format('woff2'),
		url('../public/font/Vazir-Light.woff') format('woff'),
		url('../public/font/Vazir-Light.ttf') format('truetype');
		font-weight: 300;
		font-style: normal;
	}
	@font-face {
		font-family: Vazir;
		src: url('../public/font/Vazir-Thin.eot');
		src: url('../public/font/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
		url('../public/font/Vazir-Thin.woff2') format('woff2'),
		url('../public/font/Vazir-Thin.woff') format('woff'),
		url('../public/font/Vazir-Thin.ttf') format('truetype');
		font-weight: 100;
		font-style: normal;
	}



	* {
		box-sizing: border-box;
		font-family: Vazir;
	}

	.dastnevis {
		font-family: Dastnevis;
		font-weight: bold;
	}

	html, body {
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		scroll-behavior: smooth;
		/*background-color: linear-gradiant(235deg,#fff 70%,#eeeeee);*/
		background-color: #eeeeee;
		/*background: #E5E5E5;*/
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.wrapper{
		width: 1200px;
		margin: 0 auto;
	}


	.box-white {
		background-color: #ffffff;
		border: 1px solid #dedede;
		box-shadow: 1px 1px 3px #999999;
		border-radius: 4px;
	}
	.wrapper-register {
		max-width: 600px;
		margin: 0 auto;
	}

</style>
