const checkButton= document.querySelector('#check');
const name= document.querySelector('#currencyName');
const ammount= document.querySelector('#ammount');
const result= document.querySelector('#result');

checkButton.addEventListener('click', ()=>{
        if(name.value== '' || ammount.value== ''){
        result.innerHTML= `<p class='alert alert-danger'>Please Put All Values</p>`
        }
        else{
        result.innerHTML= ammountFinal(name.value, ammount.value);
        name.value= '';
        ammount.value= '';
        }
});

