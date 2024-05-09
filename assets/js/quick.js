function deleteDiv() {
    // var lastDiv = sort_div.lastElementChild;
    let sort_div_elements = document.getElementsByClassName("sort-div");
    while (sort_div_elements.length > 0) {
      sort_div.removeChild(sort_div_elements[0]);
    }
  }
  
  function CreateColumns() {
    let count = lengthRange.value;
    let height = 55;
    let width = {
      3: 250,
      4: 200,
      5: 150,
      6: 125,
      7: 107,
      8: 94,
      9: 83,
      10: 75,
      11: 68,
      12: 63,
      13: 57,
      14: 54,
      15: 50,
      16: 47,
      17: 44,
      18: 42,
      19: 39,
      20: 37,
    };
    let positions = {
      3: {
        1: 30,
        2: 280,
        3: 530,
      },
      4: {
        1: 20,
        2: 220,
        3: 420,
        4: 620,
      },
      5: {
        1: 20,
        2: 170,
        3: 320,
        4: 470,
        5: 620,
      },
      6: {
        1: 20,
        2: 145,
        3: 270,
        4: 395,
        5: 520,
        6: 645,
      },
      7: {
        1: 20,
        2: 127,
        3: 234,
        4: 341,
        5: 448,
        6: 555,
        7: 662,
      },
      8: {
        1: 20,
        2: 114,
        3: 208,
        4: 302,
        5: 396,
        6: 490,
        7: 584,
        8: 678,
      },
      9: {
        1: 20,
        2: 103,
        3: 186,
        4: 269,
        5: 352,
        6: 435,
        7: 518,
        8: 601,
        9: 684,
      },
      10: {
        1: 20,
        2: 95,
        3: 170,
        4: 245,
        5: 320,
        6: 395,
        7: 470,
        8: 545,
        9: 620,
        10: 695,
      },
      11: {
        1: 20,
        2: 88,
        3: 156,
        4: 224,
        5: 292,
        6: 360,
        7: 428,
        8: 496,
        9: 564,
        10: 632,
        11: 700,
      },
      12: {
        1: 20,
        2: 83,
        3: 146,
        4: 209,
        5: 272,
        6: 335,
        7: 398,
        8: 461,
        9: 524,
        10: 587,
        11: 650,
        12: 713,
      },
      13: {
        1: 20,
        2: 77,
        3: 134,
        4: 191,
        5: 248,
        6: 305,
        7: 362,
        8: 419,
        9: 476,
        10: 533,
        11: 590,
        12: 647,
        13: 704,
      },
      14: {
        1: 20,
        2: 74,
        3: 128,
        4: 182,
        5: 236,
        6: 290,
        7: 344,
        8: 398,
        9: 452,
        10: 506,
        11: 560,
        12: 614,
        13: 668,
        14: 722,
      },
      15: {
        1: 20,
        2: 70,
        3: 120,
        4: 170,
        5: 220,
        6: 270,
        7: 320,
        8: 370,
        9: 420,
        10: 470,
        11: 520,
        12: 570,
        13: 620,
        14: 670,
        15: 720,
      },
      16: {
        1: 20,
        2: 67,
        3: 114,
        4: 161,
        5: 208,
        6: 255,
        7: 302,
        8: 349,
        9: 396,
        10: 443,
        11: 490,
        12: 537,
        13: 584,
        14: 631,
        15: 678,
        16: 725,
      },
      17: {
        1: 20,
        2: 64,
        3: 108,
        4: 152,
        5: 196,
        6: 240,
        7: 284,
        8: 328,
        9: 372,
        10: 416,
        11: 460,
        12: 504,
        13: 548,
        14: 592,
        15: 636,
        16: 680,
        17: 724,
      },
      18: {
        1: 20,
        2: 62,
        3: 104,
        4: 146,
        5: 188,
        6: 230,
        7: 272,
        8: 314,
        9: 356,
        10: 398,
        11: 440,
        12: 482,
        13: 524,
        14: 566,
        15: 608,
        16: 650,
        17: 692,
        18: 734,
      },
      19: {
        1: 20,
        2: 59,
        3: 98,
        4: 137,
        5: 176,
        6: 215,
        7: 254,
        8: 293,
        9: 332,
        10: 371,
        11: 410,
        12: 449,
        13: 488,
        14: 527,
        15: 566,
        16: 605,
        17: 644,
        18: 683,
        19: 722,
      },
      20: {
        1: 20,
        2: 57,
        3: 94,
        4: 131,
        5: 168,
        6: 205,
        7: 242,
        8: 279,
        9: 316,
        10: 353,
        11: 390,
        12: 427,
        13: 464,
        14: 501,
        15: 538,
        16: 575,
        17: 612,
        18: 649,
        19: 686,
        20: 723,
      },
    };
    let arr = [];
    let div_height_arr = [];
    deleteDiv();
    // let item_count = document.getElementsByClassName("sort-div").length;
    // console.log(item_count);
  
    for (let i = 0; i < count; i++) {
      arr[i] = Math.round(Math.random() * 41 + 10);
      div_height_arr[i] = Math.round(height * (arr[i] / 10));
      fin_width = width[`${count}`];
      column = document.createElement("div");
      column.classList.add("sort-div");
      column.style.height = `${height * (arr[i] / 10)}px`;
      column.style.width = `${fin_width}px`;
      column.style.left = `${positions[count][i + 1]}px`;
      sort_div.appendChild(column);
      // sort_div.style.height = `${Math.max(div_height_arr)+2}px`
      let coord = column.getBoundingClientRect();
  
      // console.log(coord.top, coord.left, coord.right, coord.bottom);
    }
  
    console.log(div_height_arr);


    // const len = arr.length;
    // for (let i = 0; i < len - 1; i++) {
    //     let minIndex = i;
    //     for (let j = i + 1; j < len; j++) {
    //         if (arr[j] < arr[minIndex]) {
    //             minIndex = j;
    //         }
    //     }
    //     if (minIndex !== i) {
    //         // Swap elements
    //         let temp = arr[i];
    //         arr[i] = arr[minIndex];
    //         arr[minIndex] = temp;


    //         let temp1 = div_height_arr[i]
    //         div_height_arr[i] = div_height_arr[minIndex]
    //         div_height_arr[minIndex] = temp1
    //     }
    // }
    
console.log(div_height_arr);
}


CreateColumns()