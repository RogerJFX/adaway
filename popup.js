'use strict';

function log(msg) {
    chrome.tabs.executeScript(null,
        {code: "console.log('" + msg + "')"});
}
let activeButton;

function clickActivationToggle() {

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {wot: "toggleActive"}, function (response) {
            log('adaway active: ' + response.res);
            window.close();
        });
    });
}

function isActive(then) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {wot: "isActive"}, function (response) {
            then(response.res);
        });

    });
}

document.addEventListener('DOMContentLoaded', function () {
    activeButton = document.getElementById('active');
    activeButton.addEventListener('click', clickActivationToggle);
    isActive(function(active) {
        activeButton.innerHTML = active ? 'Deactivate' : 'Activate';
    });
});
