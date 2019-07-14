window.$aa = window.$aa || {};

(function Frame(me) {

	// does not seem to work
	function extractClicktag(node) {
		const atts = node.attributes; // .filter(a => a !=);
		//console.log('asd\nasd');
		console.log(atts);
		
		const n = node.getAttribute('name');
		const id = node.getAttribute('id'); // ftframe3901076
		console.log(id, n);
		
	}
	
    function extractClicktags() {
		console.log(document.querySelectorAll('iframe').length);
		Array.from(document.querySelectorAll('iframe'))
			.forEach(f => extractClicktag(f));
	}

	// CORS...
	function xhrClick(url, protocol) {
		if(!url.startsWith(protocol)) { // https:
			return;
		}
		const invocation = new XMLHttpRequest();
		invocation.open('GET', url, true);
		// invocation.onreadystatechange = console.log(invocation.readyState);
		invocation.send(); 
	}

	window.addEventListener('load', () => {
		
		if (window !== top) {
			const ifra = document.createElement('IFRAME');
			ifra.setAttribute('name', 'ifra');
			ifra.setAttribute('style', 'position:absolute;left:-2000px;');
			document.body.appendChild(ifra);
			setTimeout(() => {
				console.log('JETZT ABER');
				const strIframes = document.body.innerHTML.match(/<[ ]*?iframe.*?>/isg);
				if(strIframes) {
					strIframes.forEach(ifr => console.log(ifr));
					// extractClicktags();
				}
			}, 8000);

			const protocol = window.location.protocol;
			const anchors = document.querySelectorAll('a');
			anchors.forEach(a => {
				const href = a.getAttribute('href');
				if(href && href.startsWith(protocol)) {
					a.setAttribute('target', 'ifra');
					a.click(); // DONT!
					xhrClick(href, protocol);
				}
			});
		}
	});
	
})($aa.frame = $aa.frame || {});
