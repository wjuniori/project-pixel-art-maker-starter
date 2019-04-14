'use strict'; // Start of use strict

// Hides table, removes its grid (its rows) and displays table
function destroyGrid(grid) {

  const trs = grid.querySelectorAll('tr');

  if (trs.length) {

    grid.setAttribute('style', 'display: none;');

    for (let i = 0; i < trs.length; i++) {
      trs[i].remove();
    }

    grid.removeAttribute('style');
  }

}

// Sets table size as a grid N (height) by M (width)
function makeGrid(grid, height, width) {

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < height; i++) {

    const tr = document.createElement('tr');

    for (let j = 0; j < width; j++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }

    fragment.appendChild(tr);

  }

  grid.appendChild(fragment);

}

// Executes when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // Creates an empty grid N (height) by M (width) when form is submited
  document.querySelector('#sizePicker').addEventListener('submit', function(event) {

    const pixelCanvas = document.getElementById('pixelCanvas');
    const inputHeight = document.getElementById('inputHeight');
    const inputWidth = document.getElementById('inputWidth');

    // Prevents event default action
    event.preventDefault();

    destroyGrid(pixelCanvas);
    makeGrid(pixelCanvas, inputHeight.valueAsNumber, inputWidth.valueAsNumber);

  });

  // Changes color of a grid square (and only that square) when that square (a td element) is clicked
  document.querySelector('#pixelCanvas').addEventListener('click', function(event) {

    // Delegates the click event to td element
    if (event.target.nodeName.toLowerCase() === 'td') {
      const color = document.getElementById('colorPicker');
      event.target.style.backgroundColor = color.value;
    }

  });

});

// End of use strict