import { Item } from './Item'


chrome.storage.local.get(["defaultGroup"], function(items) {
  var group = document.getElementById('group');
  var itemsInGroup = items["defaultGroup"];
  
  for (var i = 0; i < itemsInGroup.length; i++) {
    let item: Item = itemsInGroup[i];
    var groupItem = createGroupItem(item, i);
    group.appendChild(groupItem);
  }

}) 

function createGroupItem(item : Item, i) {
  var groupItem = document.createElement("div");
  groupItem.className = 'groupItem';
  var link = createItemLInk(item, i);
  groupItem.appendChild(link);
  return groupItem;
}

function createItemLInk(item : Item, i) {
  var link = document.createElement('a');
  var linkText = document.createTextNode(item.url);
  link.appendChild(linkText);
  link.href = item.url;
  link.title = 'Item ' + i;
  return link;
}