import { Item } from "./Item";
import { Group } from "./Group";

let saveTab = document.getElementById('saveTab');

saveTab.onclick = function(element) {
  chrome.tabs.query({'active': true}, function(tabs) {
      let url = tabs[0].url;
      var selectedGroup = document.getElementById('groups') as HTMLSelectElement;
      var group = selectedGroup.options[selectedGroup.selectedIndex].value;

      chrome.storage.local.get([group], function(items) {
          let item : Item = {
            url: url,
            title: ''
          };

          items[group].push(item);

          chrome.storage.local.set(items);
      })
      chrome.storage.local.get(null, function(all) {
          console.log(JSON.stringify(all));
      })
  })
};

let groups = document.getElementById('groups');

chrome.storage.sync.get('groups', function(groups) {
  
})