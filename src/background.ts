import { Group } from './Group'

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.clear();
    let group: Group = new Group('defaultGroup', 'Default Group');
    
    chrome.storage.local.set({"defaultGroup": group}, function() {
      console.log("Default group created");
    });

});