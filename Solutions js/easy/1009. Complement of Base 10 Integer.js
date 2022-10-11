var bitwiseComplement = function(n) {
    const bin = n.toString(2);
    let complement = "";
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] == 0) {
            complement += 1;
        } else {
            complement += 0;
        }
    }
    const end = parseInt(complement, 2);
    return end;
};

bitwiseComplement(5);
// bitwiseComplement(7);
// bitwiseComplement(10);
// bitwiseComplement(3);