import { Item } from "./Item";

let storeTab = document.getElementById('storeTab');

storeTab.onclick = function(element) {
  chrome.tabs.query({'active': true}, function(tabs) {
      let url = tabs[0].url;
      var groupName = "defaultGroup"

      chrome.storage.local.get(["defaultGroup"], function(items) {
          let item : Item = {
            url: url,
            title: ''
          };

          items["defaultGroup"].push(item);

          chrome.storage.local.set(items);
      })
      chrome.storage.local.get(null, function(all) {
          console.log(JSON.stringify(all));
      })
  })
};