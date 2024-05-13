
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function createBars() {
  const arr = Array.from({ length: lengthRange.value }, () => Math.floor(Math.random() * 250) + 50);
  sort_div.innerHTML = '';
  arr.forEach((value) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}px`;
    sort_div.appendChild(bar);
  });
}

async function quickSort() {
  document.getElementById("start_btn").disabled = true;
  const bars = Array.from(sort_div.children).map(bar => parseInt(bar.style.height));
  await quickSortHelper(bars, 0, bars.length - 1);
  document.getElementById("start_btn").disabled = false;
}

async function quickSortHelper(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end, sort_option.value);
  await Promise.all([
    quickSortHelper(arr, start, index - 1),
    quickSortHelper(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end, sortOrder) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    const bar1 = sort_div.children[i];
    const bar2 = sort_div.children[pivotIndex];
    bar1.style.backgroundColor = '#76794C';
    bar2.style.backgroundColor = '#76794C';
    await new Promise(resolve => setTimeout(resolve, 1000 / speedRange.value));

    let condition;
    if (sortOrder === 'increase') {
      condition = arr[i] < pivotValue;
    } else if (sortOrder === 'decrease') {
      condition = arr[i] > pivotValue;
    }

    if (condition) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }

    bar1.style.backgroundColor = 'aliceblue';
    bar2.style.backgroundColor = 'aliceblue';
  }
  await swap(arr, pivotIndex, end);
  return pivotIndex;
}

async function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  const bar1 = sort_div.children[i];
  const bar2 = sort_div.children[j];
  const tempHeight = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = tempHeight;

  await new Promise(resolve => setTimeout(resolve, 1000 / speedRange.value));
}

// Initialize the visualization
createBars();

