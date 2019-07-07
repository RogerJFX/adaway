window.$aa = window.$aa || {};

(function Messager(me) {

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        // console.log(sender.tab ?
        //     "from a content script:" + sender.tab.url :
        //     "from the extension");
        if (request.wot === "toggleActive") {
            sendResponse({res: $aa.main.toggleActive()});
        } else if (request.wot === "isActive") {
            sendResponse({res: $aa.main.isActive()});
        }
        return true;
    });

})($aa.messager = $aa.messager || {});
