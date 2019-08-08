import { Item } from "./Item";
import { Group } from "./Group";
import * as uuid from "uuid";

let saveTab = document.getElementById('saveTab');
var screenshotId = 0;

saveTab.onclick = function(element) {
  chrome.tabs.captureVisibleTab(function(screenshotUrl) {
    chrome.tabs.query({'active': true}, function(tabs) {
        let url = tabs[0].url;
        var selectedGroup = document.getElementById('groups') as HTMLSelectElement;
        var groupValue = selectedGroup.options[selectedGroup.selectedIndex].value;

        chrome.storage.local.get([groupValue], function(group: Group) {
            let item : Item = {
              url: url,
              title: '',
              screenshotUrl: screenshotUrl
            };


            group[groupValue].items.push(item);

            chrome.storage.local.set(group);
        });
    });
  });
};

let createGroup = document.getElementById('createGroup');
createGroup.onclick = function(element) {
  let groupNameElement = document.getElementById('createGroupInput') as HTMLInputElement;
  let groupName = groupNameElement.value;
  let groupId : string = uuid.v4();
  let group: Group = new Group(groupId, groupName);
  alert(JSON.stringify(group));
}

let groups = document.getElementById('groups');


chrome.storage.local.get('groups', function(groups) {
  
})