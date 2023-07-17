

 function changeImg() {
 let country = document.querySelector('#country')
 let img= document.querySelector('#pic')
 img.src = "../resorces/" + country.options[country.selectedIndex].value;
 console.log(country)
 }
 let country = document.querySelector('#country')
 country.addEventListener('change' , changeImg)

 
    



