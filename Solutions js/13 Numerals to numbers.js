var romanToInt = function(s) {
    const numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (
            numerals[s[i]] == 1 &&
            (numerals[s[i + 1]] == 5 || numerals[s[i + 1]] == 10)
        ) {
            total += numerals[s[i + 1]] - numerals[s[i]];
            i++;
        } else if (
            numerals[s[i]] == 10 &&
            (numerals[s[i + 1]] == 50 || numerals[s[i + 1]] == 100)
        ) {
            total += numerals[s[i + 1]] - numerals[s[i]];
            i++;
        } else if (
            numerals[s[i]] == 100 &&
            (numerals[s[i + 1]] == 500 || numerals[s[i + 1]] == 1000)
        ) {
            total += numerals[s[i + 1]] - numerals[s[i]];
            i++;
        } else {
            total += numerals[s[i]];
        }
    }
    console.log(total);
    return total;
};

romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");