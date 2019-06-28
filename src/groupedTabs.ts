import { Item } from './Item'
import { Group } from './Group';
import { IframeHTMLAttributes } from 'react';

chrome.storage.local.get(null, function(result) {

  var groupsElement = document.getElementById('groups');

  for (var key in result) {
    var group = result[key] as Group;
    var groupElement = createGroup(group);
    groupsElement.appendChild(groupElement);
  }

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
  var link = createItemLInk(item);
  
  var image = createItemScreenImage(item);
  link.appendChild(image);

  groupItem.appendChild(link);
  return groupItem;
}

function createItemLInk(item: Item): HTMLAnchorElement {
  var link = document.createElement('a');
  link.href = item.url;
  link.title = item.title;
  return link;
}

function createItemScreenImage(item: Item): HTMLImageElement {
  var image = document.createElement('img');
  image.src = item.screenshotUrl;
  image.className = 'screenshot';
  image.title = item.url;
  return image;
}