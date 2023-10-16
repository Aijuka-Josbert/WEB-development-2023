let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll
('buttons')

let strring= "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            strring = eval(string);
            input.value = string;
        }
        string += e.target.innerHTML;
        input.value =string;
    })
})