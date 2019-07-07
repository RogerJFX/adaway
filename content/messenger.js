window.$aa = window.$aa || {};

(function Messenger() {

    chrome.runtime.onMessage.addListener((request, sender, sendResponseFn) => {
        switch (request.wot) {
            case "toggleActive":
                sendResponseFn({res: $aa.main.toggleActive()});
                break;
            case "isActive":
                sendResponseFn({res: $aa.main.isActive()});
                break;
            default:
                throw "no suitable request type recognized";
        }
        return true;
    });

})();
