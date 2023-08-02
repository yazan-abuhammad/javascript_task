let country = document.querySelector('#country')
let img= document.querySelector('#pic')
 function changeImg() {
 
 
 img.src = "../resorces/" + country.options[country.selectedIndex].value;

 }
 
 country.addEventListener('change' , changeImg)

 
    



