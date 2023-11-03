let celsius = document.getElementById("celsius");
let fahrenheight = document.getElementById("fahrenheight");
let kelvin = document.getElementById("kelvin");

celsius.oninput = function () {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheight.value = parseFloat(f.toFixed(2));

    let k = parseFloat(celsius.value) + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
};

fahrenheight.oninput = function () {
    let c = ((parseFloat(fahrenheight.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));

    let k = ((parseFloat(fahrenheight.value) - 32) * 5) / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
};

kelvin.oninput = function () {
    let f = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;
    fahrenheight.value = parseFloat(f.toFixed(2));

    let c = parseFloat(kelvin.value) - 273.15;
    celsius.value = parseFloat(c.toFixed(2));
};

