<<<<<<< HEAD
export function KelvinToCelcius(kelvins, decimals, stringify) {
    var celsius = kelvins - 273.15;

    if (decimals) celsius = celsius.toFixed(decimals);

    if (stringify) return celsius.toString() + " ºC";
    else return celsius;
=======
export function KelvinToCelcius(kelvin, decimals, stringify){
    var celsius = kelvin - 273.15;
    var formattedCelsius = "";
    
    if(decimals) formattedCelsius = celsius.toFixed(1);
    if(stringify) return formattedCelsius.toString() + " ºC";
    else return formattedCelsius;
>>>>>>> 213392e21f81c3a09e1daf3ba48e46cf7ab43f66
}