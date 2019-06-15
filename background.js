chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.clear();
    chrome.storage.local.set({"defaultGroup": new Array()}, function() {
      console.log("Default group created");
    });

});
