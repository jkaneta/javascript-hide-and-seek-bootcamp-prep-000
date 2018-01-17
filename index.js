function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var myList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var item in myList) {
    myList[item].innerHTML = parseInt(myList[item].innerHTML) + n;
  }
}

function deepestChild() {
  let currentSelector = document.querySelector('div#grand-node');
  let nextSelector = currentSelector;
  let elementTagName = '';
  
  while (currentSelector) {
    elementTagName = currentSelector.tagName;
    nextSelector = currentSelector.querySelector(elementTagName);
    if (nextSelector === null) {
      return currentSelector;
    }
    currentSelector = nextSelector;
  }
  return null;
}