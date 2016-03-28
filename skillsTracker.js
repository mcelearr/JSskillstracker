function toggler(divId) {
    $("#" + divId).toggleClass("hidden");
}

$('#button-toggle').click(function(){
  $(this).find('span').toggleClass('glyphicon-ok').toggleClass('glyphicon-remove');
  RadarChart(".radarChart", data, radarChartOptions);
});
