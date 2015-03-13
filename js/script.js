function getValidity() {
  return (
    document.form1.name.validity.valid &&
    document.form1.email.validity.valid &&
    document.form1.comment.validity.valid
  );
}
function getLength() {
  return parseInt(localStorage.getItem('myAppNumComments')) || 0;
}
function setLength(l) {
  localStorage.setItem('myAppNumComments', l);
}
function set(index, key, value) {
  return localStorage.setItem('myApp.' + index + '.' + key, value);
}
function get(index, key) {
  return localStorage.getItem('myApp.' + index + '.' + key);
}
function dateFormat(date) {
  return date.toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')
}
function insert() {
  if (getValidity()) {
    var f = document.form1;
    var length = getLength();
    set(length, 'name', f.name.value);
    set(length, 'email', f.email.value);
    set(length, 'gender', f.gender.value);
    set(length, 'comment', f.comment.value);
    set(length, 'time', dateFormat(new Date()));
    setLength(length + 1);
    display();
    return true;
  } else return false;
}
function display() {
  var div = document.getElementById('results');
  div.innerHTML = '';
  var length = getLength();
  for (var i=0; i<length; i++) {
    var node = model.cloneNode(true);
    var tag;
    node.id = 'comment' + i;
    tag = node.getElementsByClassName('cm-name')[0];
    if (tag) tag.innerHTML = get(i, 'name');
    var tag = node.getElementsByClassName('cm-gender')[0],
        value = get(i, 'gender');
    if (tag) {
      if (tag.tagName == 'I') {
        if (value == 'Maschio') tag.classList.add('fa', 'fa-male');
        else tag.classList.add('fa', 'fa-female');
      }
      else tag.innerHTML = value;
    }
    tag = node.getElementsByClassName('cm-email')[0];
    if (tag) tag.innerHTML = get(i, 'email');
    tag = node.getElementsByClassName('cm-time')[0];
    if (tag) tag.innerHTML = get(i, 'time');
    tag = node.getElementsByClassName('cm-comment')[0];
    if (tag) tag.innerHTML = get(i, 'comment');
    if (i == length-1) {
      var tag = node.getElementsByClassName('cm-separator')[0];
      if (tag) tag.remove();
    }
    div.appendChild(node);
  }
}
function empty() {
  setLength(0);
  display();
}
var model = document.getElementById('comment-model');
display();
