var countBits = function(n) {
    const bin = n.toString(2);
    const length = n + 1;
    let ans = [];
    for (let i = 0; i < length; i++) {
        const bin = i.toString(2);
        const count1 = bin.split("1").length - 1;
        ans.push(count1);
    }
    return ans;
};

countBits(2);

//2 + 1 = 3
//0:0,1:1,2:0010