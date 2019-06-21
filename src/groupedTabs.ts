import { Item } from './Item'
import { Group } from './Group';

var key = "defaultGroup";
chrome.storage.local.get([key], function(result) {
  var groupElement = document.getElementById('group');
  var group = result[key] as Group;

  var itemsInGroup = group.items;

  for (var i = 0; i < itemsInGroup.length; i++) {
    let item: Item = itemsInGroup[i];
    var groupItem = createGroupItem(item, i);
    groupElement.appendChild(groupItem);
  }

})

function createGroupItem(item: Item, i: number): HTMLDivElement {
  var groupItem = document.createElement('div');
  groupItem.className = 'groupItem';
  var link = createItemLInk(item, i);
  groupItem.appendChild(link);
  return groupItem;
}

function createItemLInk(item: Item, i: number): HTMLAnchorElement {
  var link = document.createElement('a');
  var linkText = document.createTextNode(item.url);
  link.appendChild(linkText);
  link.href = item.url;
  link.title = 'Item ' + i;
  return link;
}