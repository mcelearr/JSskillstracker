
function User(){
  var obj = JSON.parse(document.cookie.split('=')[1]);
  for (prop in obj){
    this[prop] = obj[prop];
  };
  User.prototype.incValue = function(skill, subSkill){
    let curSkill = this[skill];
    if (curSkill[subSkill] < 1){
      curSkill[subSkill] = 1;
    }
    document.cookie = 'user='+JSON.stringify(this);
  };
  User.prototype.getAverage = function(skill){
    let sum = 0, count = 0;
    for (prop in skill){
      if (prop != 'title'){
        sum += skill[prop];
        count++;
      };
    };
    return sum / count;
  };
};

function setCookie(){
  if (!document.cookie) {
  let user = {
    basicDataTypes: {
      title: "Basic Data Types",
      numbers: 0,
      strings: 0,
      booleans: 0
    },
    advancedDataTypes: {
      title: "Advanced Data Types",
      arrays: 0,
      objects: 0,
      undefinedAndNull: 0
    },
    operators: {
      title: "Operators",
      arithmeticOperators: 0,
      logicalOperators: 0,
      otherOperators: 0
    }
  };
  var cookieStr = JSON.stringify(user);
  document.cookie = 'user='+cookieStr;
  };
};
