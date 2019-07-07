window.$aa = window.$aa || {};

(function Main(me) {

    let active = true;

    function hideIframes() {
        const att = active ? 'none' : 'block';
        Array.from(document.querySelectorAll('iframe'))
            .filter(f => f.style.display !== att)
            .forEach(f => f.style.display = att);
    }

    function startFrameGuard() {
        window.setInterval(hideIframes, 500);
    }

    window.addEventListener('load', startFrameGuard, true);

    me.toggleActive = () => {
        active = !active;
        hideIframes();
        return active;
    };

    me.isActive = () => {
        return active;
    };

})($aa.main = $aa.main || {});
