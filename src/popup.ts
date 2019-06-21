import { Item } from "./Item";
import { Group } from "./Group";

let saveTab = document.getElementById('saveTab');

saveTab.onclick = function(element) {
  chrome.tabs.query({'active': true}, function(tabs) {
      let url = tabs[0].url;
      var selectedGroup = document.getElementById('groups') as HTMLSelectElement;
      var groupValue = selectedGroup.options[selectedGroup.selectedIndex].value;

      chrome.storage.local.get([groupValue], function(group: Group) {
          let item : Item = {
            url: url,
            title: ''
          };

          group[groupValue].items.push(item);

          alert(JSON.stringify(group));
          chrome.storage.local.set(group);
      })
      chrome.storage.local.get(null, function(all) {
          console.log(JSON.stringify(all));
      })
  })
};

let groups = document.getElementById('groups');

chrome.storage.local.get('groups', function(groups) {
  
})