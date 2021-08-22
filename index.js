let splitValue = (input) => input.split(",").map(function (item) {
    return parseInt(item, 10);
});
let sortValue = (sortVal) => sortVal.sort(function (a, b) {
    return a - b;
});
let reverseValue = (reverseVal) => reverseVal.reverse();

function ascending() {
    const ascendingInputValue = document.getElementById("ascending-dependency").value;
    const myArr = splitValue(ascendingInputValue);
    const sortedValue = sortValue(myArr);
    document.getElementById("ascending-value").innerHTML = sortedValue;
}

function descending() {
    const descendingInputValue = document.getElementById("descending-dependency").value;
    const myArr = splitValue(descendingInputValue);
    const sortedValue = sortValue(myArr);
    const reversedValue = reverseValue(sortedValue);
    document.getElementById("descending-value").innerHTML = reversedValue;
}
