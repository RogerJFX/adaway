window.$aa = window.$aa || {};

(function Main(me) {
	
	function hideIframes() {
		const iframes = Array.from(document.querySelectorAll('iframe')).filter(f => f.style.display !== 'none');
		iframes.forEach(f => {
			console.log('HIDE', f);
			f.style.display = 'none'
		});
	}
	
	function startFrameGuard() {
		window.setInterval(hideIframes, 500);
	}
	
	window.addEventListener('load', startFrameGuard, true);
	
})($aa.main = $aa.main || {});
