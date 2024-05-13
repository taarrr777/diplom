function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function insertionSort() {
  const bars = document.querySelectorAll('.bar');
  const n = bars.length;
  const sortOrder = sort_option.value; // Get the sorting order

  for (let i = 1; i < n; i++) {
    let key = parseInt(bars[i].style.height);
    let j = i - 1;
    
    bars[i].style.backgroundColor = '#D15D04';
    
    await sleep(1000 / speedRange.value);
    
    while (j >= 0 && 
           (sortOrder === "increase" ? parseInt(bars[j].style.height) > key : parseInt(bars[j].style.height) < key)) {
      bars[j + 1].style.height = bars[j].style.height;
      j = j - 1;
      await sleep(1000 / speedRange.value);
    }
    
    bars[j + 1].style.height = `${key}px`;
    bars[i].style.backgroundColor = 'aliceblue';
  }
}

// Initialize array
function init() {
  sort_div.innerHTML = '';
  for (let i = 0; i < lengthRange.value; i++) {
    const height = Math.floor(Math.random() * 200) + 20;
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${height}px`;
    sort_div.appendChild(bar);
  }
}

init(); // Call init to generate initial random bars

