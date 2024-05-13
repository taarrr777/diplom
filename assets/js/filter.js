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



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);




  let code_divs = document.getElementsByClassName("lang");
  function Active() {
    for (let i = 0; i < code_divs.length; i++) {
      code_divs[i].classList.remove("active1");
    }
    document.querySelectorAll('.lang').forEach(function(element) {
        element.addEventListener('click', function(event) {
            // Get the ID of the clicked element
            event.target.classList.add("active1");
  
            if (event.target.id === "js") {
              document.getElementById("py_code").style.display = "none"
              document.getElementById("c_sharp_code").style.display = "none"
              document.getElementById("cpp_code").style.display = "none"
              document.getElementById("js_code").style.display = "block"
            }
  
            if (event.target.id === "py") {
              document.getElementById("js_code").style.display = "none"
              document.getElementById("c_sharp_code").style.display = "none"
              document.getElementById("cpp_code").style.display = "none"
              document.getElementById("py_code").style.display = "block"
            }
  
            if (event.target.id === "c_sharp") {
              document.getElementById("js_code").style.display = "none"
              document.getElementById("cpp_code").style.display = "none"
              document.getElementById("py_code").style.display = "none"
              document.getElementById("c_sharp_code").style.display = "block"
            }
  
            if (event.target.id === "cpp") {
              document.getElementById("js_code").style.display = "none"
              document.getElementById("c_sharp_code").style.display = "none"
              document.getElementById("cpp_code").style.display = "block"
              document.getElementById("py_code").style.display = "none"
            }
        });
  
    });
  }
  
  