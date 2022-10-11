var maxProfit = function(prices) {
    let bigdiff = 0;
    let minprice = prices[0];
    for (let sell = 1; sell < prices.length; sell++) {
        let profit = prices[sell] - minprice;
        bigdiff = Math.max(bigdiff, profit);
        if (prices[sell] < minprice) {
            minprice = prices[sell];
        }
    }
    return bigdiff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));

//prof = sale - buy