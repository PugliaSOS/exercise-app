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
function insert() {
  var f = document.form1;
  var length = getLength();
  set(length, 'name', f.name.value);
  set(length, 'email', f.email.value);
  set(length, 'gender', f.gender.value);
  set(length, 'comment', f.comment.value);
  setLength(length + 1);
  display();
}
function display() {
  var div = document.getElementById('results');
  div.innerHTML = '';
  var length = getLength();
  for (var i=0; i<length; i++) {
    div.innerHTML += '<div class=comment><h1>' + get(i, 'name') + '</h1>' +
      '<h3>' + get(i, 'gender') + '</h3>' +
      '<h3>' + get(i, 'email') + '</h3>' +
      '<p>' + get(i, 'comment') + '</p>' +
      '</div>'
    if (i != length-1) div.innerHTML += '<hr>';
  }
}
display();