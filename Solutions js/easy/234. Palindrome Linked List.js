var isPalindrome = function(head) {
    if (head.length % 2 === 0) {
        const firsthalf = head.slice(0, head.length / 2);
        const secondhalf = head.slice(head.length / 2);
        const reverse = secondhalf.reverse();
        const jsfirsthalf = firsthalf.join("");
        const jssecondthalf = reverse.join("");
        if (jsfirsthalf == jssecondthalf) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

console.log(isPalindrome([1, 2, 2, 1]));
// console.log(isPalindrome([1, 2]));