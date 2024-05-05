const sort_option = document.querySelector("#sortOption")
const speedRange = document.querySelector("#speedrange")
const lengthRange = document.querySelector("#lengthrange")
const speedRangeLabel = document.querySelector("#speedrangeLabel")
const lengthRangeLabel = document.querySelector("#lengthrangeLabel")
const sort_div = document.querySelector(".sort-columns")

setInterval(() => {
    speedRangeLabel.innerText = "Speed: " + speedRange.value
    lengthRangeLabel.innerText = "Length: " + lengthRange.value
    // console.log(sort_option.value)
}, 100);
