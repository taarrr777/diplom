// Function to generate random values within a specified range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a cube with random properties
function createCube() {
    const cube = document.createElement('div');
    cube.classList.add('cube');
    cube.style.width = `${10 + getRandom(0, 40)}px`;
    cube.style.height = `${10 + getRandom(0, 40)}px`;
    cube.style.top = `${getRandom(0, 90)}vh`;
    cube.style.left = `${getRandom(0, 90)}vw`;
    // cube.style.setProperty('--hue', getRandom(0, 360));
    cube.style.setProperty('--duration', `${2 + getRandom(0, 6)}s`);
    document.querySelector('.cube-container').appendChild(cube);
}

function createCube2() {
    const cube = document.createElement('div');
    cube.classList.add('cube2');
    cube.style.width = `${10 + getRandom(0, 40)}px`;
    cube.style.height = `${10 + getRandom(0, 40)}px`;
    cube.style.top = `${getRandom(0, 90)}vh`;
    cube.style.left = `${getRandom(0, 90)}vw`;
    // cube.style.setProperty('--hue', getRandom(0, 360));
    cube.style.setProperty('--duration', `${2 + getRandom(0, 6)}s`);
    document.querySelector('.cube-container').appendChild(cube);
}

// Create 10 cubes with random properties
for (let i = 0; i < 50; i++) {
    createCube();
    createCube2();
}