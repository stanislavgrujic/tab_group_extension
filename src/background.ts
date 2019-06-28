import { Group } from './Group'

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.clear();
    let defaultGroup: Group = new Group('defaultGroup', 'Default Group');

    chrome.storage.local.set({"defaultGroup": defaultGroup}, function() {
      console.log("Default group created");
    });

    let anotherGroup: Group = new Group('anotherGroup', 'Another Group');
    var anotherGroupName = anotherGroup.name;
    chrome.storage.local.set({'anotherGroup': anotherGroup}, function() {
      console.log(JSON.stringify(anotherGroup));
    });

});