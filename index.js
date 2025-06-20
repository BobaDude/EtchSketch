const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

createGrid(16)
function createGrid(size) {
    container.innerHTML = '';
    const totalSquares = size * size;
    const squareSize = 100 / size;
    for (let i = 0; i < totalSquares; i++){
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.style.flexBasis = `${squareSize}%`;
        container.appendChild(div);
        };
        
    }

resizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter the # of squares you want the sides to be', 16);
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100){
        createGrid(newSize);
    } else{
        alert('Please choose a # between 1 and 100')
    }
}); 

