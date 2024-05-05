
function deleteDiv() {
    // var lastDiv = sort_div.lastElementChild;
    let sort_div_elements = document.getElementsByClassName("sort-div")
    while (sort_div_elements.length > 0) {
        sort_div.removeChild(sort_div_elements[0])
    }
  }


function CreateColumns(){
    let count = lengthRange.value
    let height =55
    let width = {
        "3" : 250,
        "4" : 188,
        "5" : 150,
        "6" : 125,
        "7" : 107,
        "8" : 94,
        "9" : 83,
        "10" : 75,
        "11" : 68,
        "12" : 63,
        "13" : 57,
        "14" : 54,
        "15" : 50,
        "16" : 47,
        "17" : 44,
        "18" : 42,
        "19" : 39,
        "20" : 37,

    }
    let arr = []
    let div_height_arr = []
    deleteDiv()
    // let item_count = document.getElementsByClassName("sort-div").length;
    // console.log(item_count);

    for(let i = 0; i <count; i++){
        arr[i] = Math.round(Math.random()*41+10)
        div_height_arr[i] = Math.round(height*(arr[i]/10))
        fin_width = width[`${count}`]
        column = document.createElement("div")
        column.classList.add("sort-div")
        column.style.height = `${height*(arr[i]/10)}px`
        column.style.width = `${fin_width}px`
        sort_div.appendChild(column)
        
        let coord = column.getBoundingClientRect()

// console.log(coord.top, coord.left, coord.right, coord.bottom);
    }

    console.log(div_height_arr);


    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;


            let temp1 = div_height_arr[i]
            div_height_arr[i] = div_height_arr[minIndex]
            div_height_arr[minIndex] = temp1
        }
    }
    
console.log(div_height_arr);
}

