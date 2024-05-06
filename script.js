let form = document.querySelector('#form');
let userInput = document.querySelector('#userInput').value;
let ul = document.querySelector('ul');


form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let userInput = document.querySelector('#userInput').value;
    let val = userInput;
    console.log(val);


    const Newli = document.createElement('li');
    Newli.textContent = userInput; // adding userInput to the list
    ul.appendChild(Newli);

    userInput = document.querySelector('#userInput').value= '';
    
});


ul.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('strikethrough');
        
    } 
})

 