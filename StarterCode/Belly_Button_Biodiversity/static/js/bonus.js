function buildGauge(wfreq){

    var gauge = document.getElementById("gauge");
    Plotly.newPlot(gauge, data, layout);
}
