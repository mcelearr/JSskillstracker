String.prototype.equalSplit = function(){
  var dataArr = this.split('=');
  return dataArr.length > 2 ? [dataArr[0]].concat(dataArr.slice(1).join('=')) : dataArr;
}
function createDefinedElement(type){
  var args = Array.from(arguments).slice(1);
  var definedEl = document.createElement(type);
  args.forEach(function(el){definedEl[el.equalSplit()[0]] = el.equalSplit()[1]});
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
      var cb = createDefinedElement('div', 'className=collapsible-body');
      var subTitle = createDefinedElement('p', `innerHTML=${listItems[item][i]}`);
      var moreInfo = createDefinedElement('a', 'className=modal-trigger waves-effect waves-light btn', `href=#modal${modalCount}`, 'innerHTML=more info');
      var complete = createDefinedElement('a', `className=waves-effect waves-light btn sbtn${skillState==0 ? ' red' : ''}`, 'href=#', `innerHTML=${skillState==0 ? 'Incomplete' : 'Complete'}`, `id=${currID}`);
      var done = createDefinedElement('i', 'className=material-icons left', `innerHTML=${skillState==0 ? '' : 'done'}`, `id=${currID}check`);
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
