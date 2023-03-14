function windchillCalc(t, windspeedKmh) {
    let windspeed = windspeedKmh / 3.6;
    return t <= 10 && windspeedKmh > 4.8 ? ((12.1452 + 11.6222 * Math.sqrt(windspeed) - 1.16222 * windspeed) * (33 - t)).toFixed(2) : "N/A";

}

let windchill = windchillCalc(parseInt(temperature.innerHTML), parseInt(windspeed.innerHTML));
document.getElementById("windchill").innerHTML = windchill;