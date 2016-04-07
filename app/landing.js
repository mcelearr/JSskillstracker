function fetchData(){
  var data_req = new XMLHttpRequest();
  var logged_in = document.getElementById('logged-in');
  req.onreadystatechange = function(){
    if (req.readyState == 4 && req.status == 200){
      logged_in.innerHTML = req.respnoseText;
    }
  };
  req.open('GET', 'http://www.coudrew.ca/index.html?get_user=user', true);
  req.send();
}
