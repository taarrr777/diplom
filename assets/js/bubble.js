function createBars() {
  const arr = Array.from({ length: lengthRange.value }, () => Math.floor(Math.random() * 250) + 50);
  // deleteDiv()
  sort_div.innerHTML = '';
  arr.forEach((value) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}px`;
    sort_div.appendChild(bar);
  });
}

async function bubbleSort() {
  document.getElementById("start_btn").disabled = true;
const bars = Array.from(sort_div.children).map(bar => parseInt(bar.style.height, 10));
const n = bars.length;

const order = document.getElementById("sortOption")


for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    const bar1 = sort_div.children[j];
    const bar2 = sort_div.children[j + 1];
    
    bar1.style.backgroundColor = '#976931';
    bar2.style.backgroundColor = '#976931';
    
    await new Promise(resolve => setTimeout(resolve, 1000 / speedRange.value));

    if (order.value == "increase") {
      if (bars[j] > bars[j + 1]) {
        [bars[j], bars[j + 1]] = [bars[j + 1], bars[j]];
        bar1.style.height = `${bars[j]}px`;
        bar2.style.height = `${bars[j + 1]}px`;
      }
    }
   else{
    if (bars[j] < bars[j + 1]) {
      [bars[j], bars[j + 1]] = [bars[j + 1], bars[j]];
      bar1.style.height = `${bars[j]}px`;
      bar2.style.height = `${bars[j + 1]}px`;
    }
   }

    bar1.style.backgroundColor = 'aliceblue';
    bar2.style.backgroundColor = 'aliceblue';
  }
}
  document.getElementById("start_btn").disabled = false;
}
const arr = Array.from({ length: lengthRange.value }, () => Math.floor(Math.random() * 250) + 50);
createBars();
