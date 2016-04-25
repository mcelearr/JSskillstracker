String.prototype.firstEqualSplit = function(){
  var dataArr = this.split('=');
  return dataArr.length > 2 ? [dataArr[0]].concat(dataArr.slice(1).join('=')) : dataArr;
}
function createDefinedElement(type){
  var args = Array.from(arguments).slice(1);
  var definedEl = document.createElement(type);
  args.forEach(function(el){definedEl[el.firstEqualSplit()[0]] = el.firstEqualSplit()[1]});
  return definedEl;
}
