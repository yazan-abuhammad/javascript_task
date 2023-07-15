
let color = ''
let num=0


document.querySelector('.square' ).addEventListener('click',function(){
color=['red','yellow ','black','green','orange','brown']
    document.querySelector('.square').style.backgroundColor= color[num]
    num++
    if (num>5){
        num=0
    }
})
document.querySelector('.square' ).addEventListener('mouseout',function(){

    document.querySelector('.square').style.backgroundColor= 'blue'
})
