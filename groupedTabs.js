
chrome.storage.local.get(["defaultGroup"], function(items) {
  var group = document.getElementById('group');
  var itemsInGroup = items["defaultGroup"];
  
  for (var i = 0; i < itemsInGroup.length; i++) {
    var item = itemsInGroup[i];
    var groupItem = createGroupItem(item, i);
    group.appendChild(groupItem);
  }

}) 

function createGroupItem(item, i) {
  var groupItem = document.createElement("div");
  groupItem.className = 'groupItem';
  var link = createItemLInk(item, i);
  groupItem.appendChild(link);
  return groupItem;
}

function createItemLInk(item, i) {
  var link = document.createElement('a');
  var linkText = document.createTextNode(item);
  link.appendChild(linkText);
  link.href = item;
  link.title = 'Item ' + i;
  return link;
}
