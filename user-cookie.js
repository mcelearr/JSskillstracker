function User(){
  var obj = JSON.parse(document.cookie.split('=')[1]);
  for (prop in obj){
    this[prop] = obj[prop];
  }
  User.prototype.setValue = function(property, value){
    this[property] = value;
    document.cookie = '';
    document.cookie = 'user='+JSON.stringify(this);
  }
}

function setCookie(){
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
    otherOperators: 0,
  };
  var cookieStr = JSON.stringify(user);
  document.cookie = 'user='+cookieStr;
  };
};
