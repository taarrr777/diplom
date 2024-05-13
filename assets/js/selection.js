function createBars() {
  const arr = Array.from({ length: parseInt(lengthRange.value) }, () => Math.floor(Math.random() * 250) + 50);
  sort_div.innerHTML = '';
  arr.forEach((value) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}px`;
    sort_div.appendChild(bar);
  });
}

async function selectionSort() {
  document.getElementById("start_btn").disabled = true;
  const bars = Array.from(sort_div.children).map(bar => parseInt(bar.style.height, 10));
  const n = bars.length;

  if (sort_option.value == "decrease") {
    for (let i = 0; i < n - 1; i++) {
      let maxIndex = i;
      for (let j = i + 1; j < n; j++) {
        const bar1 = sort_div.children[j];
        const bar2 = sort_div.children[maxIndex];
  
        bar1.style.backgroundColor = '#0d6efd';
        bar2.style.backgroundColor = '#0d6efd';
  
        await new Promise(resolve => setTimeout(resolve, 1000 / parseInt(speedRange.value)));
  
        if (parseInt(bars[j]) > parseInt(bars[maxIndex])) {
          maxIndex = j;
        }
  
        bar1.style.backgroundColor = 'aliceblue';
        bar2.style.backgroundColor = 'aliceblue';
      }
      if (maxIndex !== i) {
        [bars[i], bars[maxIndex]] = [bars[maxIndex], bars[i]];
        const tempHeight = sort_div.children[i].style.height;
        sort_div.children[i].style.height = sort_div.children[maxIndex].style.height;
        sort_div.children[maxIndex].style.height = tempHeight;
      }
    }
  }
  else{
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        const bar1 = sort_div.children[j];
        const bar2 = sort_div.children[minIndex];
  
        bar1.style.backgroundColor = '#0d6efd';
        bar2.style.backgroundColor = '#0d6efd';
  
        await new Promise(resolve => setTimeout(resolve, 1000 / parseInt(speedRange.value)));
  
        if (parseInt(bars[j]) < parseInt(bars[minIndex])) {
          minIndex = j;
        }
  
        bar1.style.backgroundColor = 'aliceblue';
        bar2.style.backgroundColor = 'aliceblue';
      }
      if (minIndex !== i) {
        [bars[i], bars[minIndex]] = [bars[minIndex], bars[i]];
        const tempHeight = sort_div.children[i].style.height;
        sort_div.children[i].style.height = sort_div.children[minIndex].style.height;
        sort_div.children[minIndex].style.height = tempHeight;
      }
    }
  }

  document.getElementById("start_btn").disabled = false;
}
createBars();