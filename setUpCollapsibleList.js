
function createDefinedElement(type, classname, href, inner, id){
  var definedEl = document.createElement(type);
  if (classname && classname.length > 0) definedEl.className = classname;
  if (href && href.length > 0) definedEl.href = href;
  if (inner && inner.length > 0) definedEl.innerHTML = inner;
  if (id && id.length > 0) definedEl.id = id;
  return definedEl;
}
(function() {
      var listItems = {
      basicDataTypes: ['Basic Data Types', 'Numbers', 'Strings', 'Booleans'],
      advancedDataTypes: ['Advanced Data Types', 'Arrays', 'Undefined and Null', 'Objects'],
      operators: ['Operators', 'Arithmetic Operators', 'Logical Operators', 'Other Operators']
  };
  function camelCase(str){
    return str.split(' ').map(function(el, j){ return j == 0 ? el.toLowerCase() : el.slice(0,1).toUpperCase()+el.slice(1)}).join('').trim();
  }
  var modalCount = 0;
  for (item in listItems){
    var li = document.createElement('li');
    var title = document.createElement('div');
    title.className = 'collapsible-header';
    title.innerHTML = listItems[item][0];
    li.appendChild(title);
    for (i=1; i<listItems[item].length; i++){
      var currID = `${camelCase(listItems[item][0])}=${camelCase(listItems[item][i])}`;
      var currSkill = user[currID.split('=')[0]];
      var skillState = currSkill[currID.split('=')[1]];
      var cb = createDefinedElement('div', 'collapsible-body');
      var subTitle = createDefinedElement('p', '', '', listItems[item][i]);
      var moreInfo = createDefinedElement('a', 'modal-trigger waves-effect waves-light btn', `#modal${modalCount}`, 'more info');
      var complete = createDefinedElement('a', `waves-effect waves-light btn sbtn ${skillState==0 ? 'red' : ''}`, '#', `${skillState==0 ? 'Incomplete' : 'complete'}`, currID);
      var done = createDefinedElement('i', 'material-icons left', '', `${skillState==0 ? '' : 'done'}`, `${currID}check`);
      complete.appendChild(done);
      cb.appendChild(subTitle);
      cb.appendChild(moreInfo);
      cb.appendChild(complete);
      li.appendChild(cb);
      modalCount++;
    };
    var ul = document.getElementById('ul');
    ul.appendChild(li);
  }
})();
