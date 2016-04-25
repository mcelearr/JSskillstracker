(function() {
  //flatten skills into one array of only subskills
  var types = [];
  skills.map(function(el){el.filter(function(em,i){if (i != 0) types.push(em)})});
  //generate modals
  types.map(function(t) {
    var h4 = createDefinedElement('h4', `innerHTML=${t}`);
    var ul = createDefinedElement('ul', `id=content${types.indexOf(t)}`);
    var nodeContent = createDefinedElement('div', 'className=modal-content');
    nodeContent.appendChild(h4)
    nodeContent.appendChild(ul)
    //filter all content for current cubskill content
    var currContent = content.filter(function(el){if (el.subskill == t) return el});
    //generate elements for current subskill content
    if (currContent.length > 0) {// if content is available for current subskill
      //create elements for each content entry and append to nodeContent
      currContent.map(function(c){
        var node = createDefinedElement('div');
        node.style.backgroundColor = '#efefef';
        var title = createDefinedElement('h5', `innerHTML=${c.title}`);
        var contentType = createDefinedElement('p', `innerHTML=${c.contentType}`);
        var link = createDefinedElement('a', `href=${c.URL}`, `innerHTML=${c.description}`);
        var space = document.createElement('br');
        node.appendChild(title);
        node.appendChild(contentType);
        node.appendChild(link);
        nodeContent.appendChild(node);
        nodeContent.appendChild(space);
      })
    } else {// if no content is available for current subskill
        //generate lorem ipsum elements and append to nodeContent
        var text = ['Lorem ipsum dolor sit amet','consectetur adipisicing elit','ut labore et dolore magna aliqua','Lorem ipsum dolor sit amet, consectetur adipisicing elit','sed do eiusmod tempor incididunt ut labore','consectetur adipisicing elit']
        text.map(function(t) {
          var li = createDefinedElement('li');
          var node = document.createTextNode(t);
          li.appendChild(node);
          ul.appendChild(li);
        })
        nodeContent.appendChild(ul);
      }
    var a = createDefinedElement('a','className=modal-action modal-close waves-effect waves-green btn-flat', 'href=#!', 'innerHTML=Back');
    var nodeFooter = createDefinedElement('div', 'className=modal-footer');
    nodeFooter.appendChild(a)
    var nodeModal = createDefinedElement('div', 'className=modal modal-fixed-footer', `id=modal${types.indexOf(t)}`);
    nodeModal.appendChild(nodeContent)
    nodeModal.appendChild(nodeFooter)
    document.getElementById('modals').appendChild(nodeModal)
  });
})()
