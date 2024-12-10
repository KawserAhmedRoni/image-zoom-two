(function ($) {
	("use strict");
	// $("#zoomImage").ezPlus({
	// 	zoomType: "inner",
	// 	// cursor: "crosshair",
	// 	// cursor: "pointer",
	// 	cursor: "zoom-out",
	// });
	// $("#zoomImage").ezPlus();
	$("#zoomImage").ezPlus({
		zoomType: "lens",
		lensShape: "round",
		scrollZoom: "true",
		lensSize: 200,
	});
})(jQuery);
