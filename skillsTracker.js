function change() {
    var button = document.getElementById("button");
    alert("Hello! I am an alert box!");
    RadarChart(".radarChart", data, radarChartOptions);
}

function toggler(divId) {
    $("#" + divId).toggleClass("hidden");
}
