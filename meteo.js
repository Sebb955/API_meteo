var callbackGETSuccess = function(data) {
    console.log("donnes API", data);

    var timeLoc = document.getElementById("timeLoc").value;

    var element = document.getElementById("zone_meteo");
    element.innerHTML = `La température à ${data.hourly.time[timeLoc]} est de ${data.hourly.temperature_2m[timeLoc]} ${data.hourly_units.temperature_2m} `;

}


function buttonClickGET(){

    var url = "https://api.open-meteo.com/v1/meteofrance?latitude=48.8567&longitude=2.3510&hourly=temperature_2m&timezone=Europe%2FLondon";
    
    $.get(url, callbackGETSuccess).done(function() {
          //alert( "second success" );
        })
        .fail(function() {
          alert( "error" );
        })
        .always(function() {
          //alert( "finished" );
        });
}