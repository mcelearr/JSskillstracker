Array.prototype.arrObj = function(){
  var o = {};
  this.forEach(function(el) {o[el.split('=')[0]] = /\d+/.test(el.split('=')[1]) ? +(el.split('=')[1]) : el.split('=')[1]});
  return o;
}
function getUser(){
  if (!document.cookie) {
  let user = {
    numbers: 0,
    string: 0,
    booleans: 0,
    arrays: 0,
    objects: 0,
    undefinedAndNull: 0,
    arithmeticOperators: 0,
    logicalOperators: 0,
    otherOperators: 0
  }
  var cookieStr = JSON.stringify(user).replace(/[{}"]/g,'').replace(/:/g,'=');
  cookieStr.split(',').forEach((el)=> document.cookie = el);
  }
  return document.cookie.replace(/\s/g, '').split(';').arrObj();
}
