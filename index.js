function getFirstSelector(selector) {
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget() {
  const target = document.querySelector('#app #nested .target');
  return target;
}

function deepestChild() {
  const deep = document.getElementById('app').querySelector('#grand-node div div div div');
  return deep;
}

function increaseRankBy(n) {
  var rank = document.getElementById('app').querySelectorAll();
}
