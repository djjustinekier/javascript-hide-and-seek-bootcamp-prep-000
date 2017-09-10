function getFirstSelector(selector) {
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget() {
  const target = document.querySelector('#app #nested .target');
  return target;
}

function deepestChild() {
  const deep = document.getElementById('app').querySelectorAll('#grand-node div');
  return deep;
}

function increaseRankBy() {

}
