function toggler(divId) {
    $("#" + divId).toggleClass("hidden");
}

$('.btn').click(function(){
  $(this).find('span').toggleClass('glyphicon-ok').toggleClass('glyphicon-remove');
  var id = $(this).attr('id');
  toggleSubskill(id)

  function toggleSubskill(id){

    for (var i = 0; i < subskills.length; i++){
      if (subskills[i].button == id && subskills[i].status == 0){
        subskills[i].status = 1;
      } else if (subskills[i].button == id && subskills[i].status == 1){
        subskills[i].status = 0;
      }
    }
  }

  var data = [
        [
        {axis:skills[0],value:getAverage(skills[0])},
        {axis:skills[1],value:getAverage(skills[1])},
        {axis:skills[2],value:getAverage(skills[2])}
      ]
      ];

  RadarChart(".radarChart", data, radarChartOptions);
});
