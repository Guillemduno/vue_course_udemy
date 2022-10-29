
const inputElement  = document.getElementById('inputElement');
const button        = document.querySelector("button");
const ulElement     = document.querySelector('ul');

function myAlert()
{
   let inputValue       = inputElement.value;

   if (inputValue !== "") {
    const listElement    = document.createElement('li');
    listElement.textContent = inputValue;
    ulElement.append(listElement);
    inputElement.value = "";
   }
}

button.addEventListener('click', myAlert);