var text = ['Lorem ipsum dolor sit amet','consectetur adipisicing elit','ut labore et dolore magna aliqua','Lorem ipsum dolor sit amet, consectetur adipisicing elit','sed do eiusmod tempor incididunt ut labore','consectetur adipisicing elit']

for (var j = 1; j < 10; j++){
  var content = 'content'+j;
  var ul = document.getElementById(content);
    for (var i = 0; i < 6; i++){
      var li = document.createElement('li');
      var node = document.createTextNode(text[i]);
      li.appendChild(node);
      ul.appendChild(li);
    }
}
