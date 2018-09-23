/*!
 * scale.js
 * 用于处理等比缩放，原理是利用rem单位的相对性
 * 标准宽度（750px，即效果图宽度）时，html元素font-size为100px
 */
!function(global) {

	// 禁止被iframe
	if (global.top !== global.self) { global.top.location = global.location; }

	var doc = global.document;

	// 在PC上缩小显示
	if ( /\b(Windows\sNT|Macintosh)\b/.test(global.navigator.userAgent) ) {
		doc.write(
			'<style type="text/css">' +
				'html { font-size: 100px; }' +
				'body { width: 7.5rem; margin-left: auto !important; margin-right: auto !important; }' +
			'</style>'
		);
		return;
	}

	var scale = 1;
	doc.write(
		'<meta name="viewport" content="width=device-width' +
		',initial-scale=' + scale +
		',minimum-scale=' + scale +
		',maximum-scale=' + scale +
		',user-scalable=no" />'
	);

	// 基于rem的等比缩放
	function resetFontSize() {
		var docElt = doc.documentElement;
		docElt.style.fontSize = docElt.clientWidth / 750 * 100 + 'px';
	}
	global.addEventListener('resize', resetFontSize, false);
	resetFontSize();

}(window);