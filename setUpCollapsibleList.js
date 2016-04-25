
(function() {
  var modalCount = 0;
  //generate collapsible list
  for (skill=0; skill<skills.length; skill++){
    var li = document.createElement('li');
    var title = document.createElement('div');
    title.className = 'collapsible-header';
    title.innerHTML = skills[skill][0];
    li.appendChild(title);
    //generate sublist
    for (i=1; i<skills[skill].length; i++){
      var currID = `skill${skill}=subskill${i}`;//determine id of current html element
      var currSkill = user[currID.firstEqualSplit()[0]];
      var skillState = currSkill[currID.firstEqualSplit()[1]];//obtain state of current subskill from user
      //create html elements
      var cb = createDefinedElement('div', 'className=collapsible-body');
      var subTitle = createDefinedElement('p', `innerHTML=${skills[skill][i]}`);
      var moreInfo = createDefinedElement('a', 'className=modal-trigger waves-effect waves-light btn', `href=#modal${modalCount}`, 'innerHTML=more info');
      var complete = createDefinedElement('a', `className=waves-effect waves-light btn sbtn${skillState==0 ? ' red' : ''}`, 'href=#', `innerHTML=${skillState==0 ? 'Incomplete' : 'Complete'}`, `id=${currID}`);
      var done = createDefinedElement('i', 'className=material-icons left', `innerHTML=${skillState==0 ? '' : 'done'}`, `id=${currID}check`);
      //append html elements to list
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
