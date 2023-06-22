const container = document.querySelector('.container');
let allDivs;
let activeMode = 'color';

let numberOfSqr = 16;

const gridSize = document.getElementById('gridSize');
const slider = document.getElementById('slider');
slider.value = 16;
gridSize.textContent = `${slider.value} x ${slider.value}`;
slider.addEventListener('input', () => {
  changeGrid();
  gridSize.textContent = `${slider.value} x ${slider.value}`;
  if(activeMode === 'color') {
    colorDivs();
  }else if(activeMode === 'rainbow') {
    rainbowMode();
  }else if(activeMode === 'erase') {
    eraseDiv();
  }else if(activeMode === 'clear') {
    clearSketch();
  }
});

function changeGrid() {
  numberOfSqr = +slider.value;
  container.innerHTML = '';
  let sqr = numberOfSqr * numberOfSqr;
  let divsize = 480 / numberOfSqr + 'px';
  for(let i=0; i<sqr; i++){
    const div = document.createElement('div');
    div.style.width = divsize;
    div.style.height = divsize;
    div.classList.add('changedPixel')
    container.appendChild(div);
  }
  allDivs = document.querySelectorAll('.changedPixel');
}

const colorPicker = document.getElementById('colorPicker');
/*colorPicker.addEventListener('input', () => {
  colorBtn.style.backgroundColor = colorPicker.value;
});*/

document.addEventListener('DOMContentLoaded', () => {
  colorPicker.value = '#4F4F4F';
})

const colorBtn = document.querySelector('.color');
colorBtn.addEventListener('click', () => {
  activeMode = 'color';
  colorBtn.style.cssText = 'color: white; background-color: #4F4F4F;';
  //colorBtn.style.cssText = 'color: white;';
  //colorBtn.classList.remove('removeColorBtn');
  eraserBtn.classList.remove('coloredEraser');
  clearBtn.classList.remove('coloredEraser');
  rainbowBtn.classList.remove('coloredEraser');
  colorDivs();
})

function colorDivs() {
  let isDrawing = false;
  allDivs.forEach((div) => {
    div.addEventListener('mousedown', () => {
      isDrawing = true;
      //div.classList.add('colorDiv');
      div.style.backgroundColor = colorPicker.value;
    });

    div.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    div.addEventListener('mousemove', () => {
      if (isDrawing) {
        div.classList.add('colorDiv');
        div.style.backgroundColor = colorPicker.value;;
      }
    });
  });
}


const eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', () =>{
  activeMode = 'erase';
  eraserBtn.classList.add('coloredEraser');
  colorBtn.style.cssText = 'color: black; background-color: white;';
  clearBtn.classList.remove('coloredEraser');
  rainbowBtn.classList.remove('coloredEraser');
  eraseDiv();
  });

function eraseDiv() {
  let isErasing = false;
  allDivs.forEach((div) => {
    div.addEventListener('mousedown', () => {
      isErasing = true;
      div.style.backgroundColor = 'white';
      //div.classList.remove('colorDiv');
    });
  
    div.addEventListener('mouseup', () => {
      isErasing = false;
    });
  
    div.addEventListener('mousemove', () => {
      if (isErasing) {
        div.style.backgroundColor = 'white';
        //div.classList.remove('colorDiv');
      }
    });
  });
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  activeMode = 'clear';
  eraserBtn.classList.remove('coloredEraser');
  colorBtn.style.cssText = 'color: black; background-color: white;';
  clearBtn.classList.add('coloredEraser');
  rainbowBtn.classList.remove('coloredEraser');
  clearSketch();
})

function clearSketch() {
  allDivs.forEach((div) => {
    div.style.backgroundColor = 'white';
    //div.classList.remove('colorDiv');
  })
}

const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', () => {
  activeMode = 'rainbow';
  eraserBtn.classList.remove('coloredEraser');
  colorBtn.style.cssText = 'color: black; background-color: white;';
  clearBtn.classList.remove('coloredEraser');
  rainbowBtn.classList.add('coloredEraser');
  rainbowMode();
})

function rainbowMode() {
  let isDrawing = false;
  allDivs.forEach((div) => {
    div.addEventListener('mousedown', () => {
      isDrawing = true;
      const randomColor = getRandomColor();
      div.style.backgroundColor = randomColor;
    });

    div.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    div.addEventListener('mousemove', () => {
      if (isDrawing) {
        const randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
      }
    });
  });
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

changeGrid();
colorDivs(allDivs);


/*const pixelBtn = document.querySelector('.pixel-size');
pixelBtn.addEventListener('click', () => {
  numberOfSqr = parseInt(prompt('Enter the number of squares per side(max = 100)'));
  colorBtn.classList.remove('coloredEraser');
  eraserBtn.classList.remove('coloredEraser');
  clearBtn.classList.remove('coloredEraser');
  changeGrid();
  colorDivs(allDivs);
});*/

/*function changeGrid() {
  if(numberOfSqr > 100) {
    numberOfSqr = 100;
  }
  container.innerHTML = '';
  let sqr = numberOfSqr * numberOfSqr;
  let divsize = 480 / numberOfSqr + 'px';
  for(let i=0; i<sqr; i++){
    const div = document.createElement('div');
    div.style.width = divsize;
    div.style.height = divsize;
    div.classList.add('changedPixel')
    container.appendChild(div);
  }
  allDivs = document.querySelectorAll('.changedPixel');
}*/