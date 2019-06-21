import { Item } from './Item'
import { Group } from './Group';

var key = "defaultGroup";
chrome.storage.local.get([key], function(result) {
  var groupsElement = document.getElementById('groups');
  var group = result[key] as Group;

  var itemsInGroup = group.items;

  var groupElement = createGroup(group);
  groupsElement.appendChild(groupElement);

})

function createGroup(group: Group): HTMLDivElement {
  var groupElement = document.createElement('div');
  groupElement.className = 'group';

  var title = document.createElement('div');
  title.innerText = group.displayName;
  groupElement.appendChild(title);

  for (var i = 0; i < group.items.length; i++) {
    let item: Item = group.items[i];
    var groupItemElement = createGroupItem(item, 1);
    groupElement.appendChild(groupItemElement);
  }

  return groupElement;
}

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