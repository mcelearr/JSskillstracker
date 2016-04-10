 var ul = document.getElementById('content1one')

var text = ['Lorem ipsum dolor sit amet','consectetur adipisicing elit','ut labore et dolore magna aliqua','Lorem ipsum dolor sit amet, consectetur adipisicing elit','sed do eiusmod tempor incididunt ut labore','consectetur adipisicing elit']

for (var i = 0; i < 6; i++){
  var li = document.createElement('li');
  var node = document.createTextNode(text[i]);
  li.appendChild(node);
  ul.appendChild(li);
}
