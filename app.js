const button = document.querySelector('.uil ')
const container = document.getElementById('container')

button.addEventListener('click', createNote)
function createNote(){
    const note = document.createElement('div')
    note.classList.add('note')
    note.style.backgroundColor = getRandomColor()
    note.setAttribute('contenteditable', 'true')
    note.addEventListener('dblclick', () => {
        container.removeChild(note)
    })

    container.appendChild(note)
}
function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red},${green},${blue})`;

  return color;
    
}