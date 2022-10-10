var romanToInt = function(s) {
    const splitarr = s.split("");
    let numarr = [];
    splitarr.forEach(function(el) {
        switch (el) {
            case "I":
                numarr.push(1);
                break;
            case "V":
                numarr.push(5);
                break;
            case "X":
                numarr.push(10);
                break;
            case "L":
                numarr.push(50);
                break;
            case "C":
                numarr.push(100);
                break;
            case "D":
                numarr.push(500);
                break;
            case "M":
                numarr.push(1000);
                break;
        }
    });
    const added = numarr.reduce((a, b) => a + b, 0);
    console.log(added);
    return added;
};

romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");