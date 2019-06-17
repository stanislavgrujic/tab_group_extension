let storeTab = document.getElementById('storeTab');

storeTab.onclick = function(element) {
    chrome.tabs.query({'active': true}, function(tabs) {
        var url = tabs[0].url;
        var groupName = "defaultGroup"

        chrome.storage.local.get(["defaultGroup"], function(items) {
            
            items["defaultGroup"].push(url);

            chrome.storage.local.set(items);
        })
        chrome.storage.local.get(null, function(all) {
            console.log(JSON.stringify(all));
        })
    })
};