/*//create unguessable string for github oauth transaction
function setState(){
  var strOpts = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var str = '';
  while (str.length<=32){
    str += strOpts[Math.floor(Math.random()*62)];
  };
  return str;
};

function login(){
  //console.log('clicked');
  var req = new XMLHttpRequest();
  var state_str = setState();
  //console.log(req, state_str);
  req.open('GET', 'http://www.coudrew.ca/index.html?set_state='+state_str);
  req.send();
};*/
