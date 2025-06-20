const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

function createGrid(size) {
    container.innerHTML = '';
    const cellSize = 960;
    for (let i = 0; i < size * size; i++){
        const div = document.createElement('div');
        div.classList.add('grid-cell');
        div.style.width = '${cellSize}px';
        div.style.height = '${cellSize}px';
        div.addEventListener('mouseover', () => {
            div.style.backgroundCOlor = 'black';
        })
        container.appendChild
    }
}

resizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter the # of squares you want the sides to be', 16);
    newSize = parseInt(newSize);

    if (newSize && newSize > 0 && newSize <= 100){
        createGrid(newSize);
    } else{
        alert('Please choose a # between 1 and 100')
    }
}); 

createGrid