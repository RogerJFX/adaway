window.$aa = window.$aa || {};

(function Main(me) {

    let active = true;

    function hideFrames() {
        const att = active ? 'none' : 'block';
        Array.from(document.querySelectorAll('iframe'))
            .filter(f => f.style.display !== att)
            .forEach(f => {
                if(f.src && f.src.startsWith('javascript')) {
                    console.log('removing src att', f.src);
                    f.removeAttribute('src');
                }
				f.style.display = att;
			});
    }

    function startFrameGuard() {
        window.setInterval(() => {
			hideFrames();
		}, 500);
    }
    
    function boolRandom(percent) {
		return Math.random() * 100 < percent;
	}

    window.addEventListener('load', startFrameGuard, true);

    me.toggleActive = () => {
        active = !active;
        hideFrames();
        return active;
    };

    me.isActive = () => {
        return active;
    };

})($aa.main = $aa.main || {});
