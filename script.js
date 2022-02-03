import list from './data.js'

// variables
const listEl = document.querySelector('.list')
const del = document.querySelector('.del')
const input = document.querySelector('input');
let inputData = '';

// load data
function loadData (){
    for(let x of list){
        const div = document.createElement('div');
        div.setAttribute('class', 'show');
        div.innerText = `${x.name} , ${x.age}`;
        listEl.appendChild(div)
    }
}
loadData()


const listEls = document.querySelectorAll('.list div')
input.addEventListener('input', (e) => {
    if(e.data !== null){
        inputData += e.data;
        searchData(inputData.toLocaleLowerCase())
    }
})

const searchData = (inputData) => {
    listEls.forEach(value => {
        const valueLower = value.innerText.toLocaleLowerCase();
        if(!valueLower.includes(inputData)){
            value.classList.add('hide')
        } else {
            value.classList.remove('hide')
        }
    })  
}

// remove search and reset screen
del.addEventListener('click', () => {
    input.value = ''
    inputData = ''
    searchData(inputData)
})

// backspace clear input
input.addEventListener('keydown', (e) => {
    if(e.key == 'Backspace'){
        inputData = input.value.slice(0, -1).toLocaleLowerCase()
        searchData(inputData)
    }
})




