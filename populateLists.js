var text = ['Lorem ipsum dolor sit amet','consectetur adipisicing elit','ut labore et dolore magna aliqua','Lorem ipsum dolor sit amet, consectetur adipisicing elit','sed do eiusmod tempor incididunt ut labore','consectetur adipisicing elit']
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.map(n => {
  var content = 'content' + n
  var ul = document.getElementById(content)
  text.map(t => {
    var li = document.createElement('li')
    var node = document.createTextNode(t)
    li.appendChild(node);
    ul.appendChild(li);
  })
})
