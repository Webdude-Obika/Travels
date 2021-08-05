console.log('client side code running');


let button2=document.querySelector('#button-2')
let button3=document.querySelector('#button-3')
let button4=document.querySelector('#button-4')
let enabler=document.querySelector('#enabler')



let button1=document.querySelector('#button-1')
 button1.addEventListener('click',function(){

    button2.disabled=true
    button3.disabled=true
    button4.disabled=true
    button1.style.backgroundColor='green'
    button1.disabled=true
    console.log('button 1 was clicked');
    fetch('/president', { method: 'POST' });
 });
 

button2.addEventListener('click',function(){

    button1.disabled=true
    button3.disabled=true
    button4.disabled=true
    button2.style.backgroundColor='green';
    button2.disabled=true
    fetch('/president', { method: 'POST' });
});
 
button3.addEventListener('click',function(){
   
    button1.disabled=true
    button2.disabled=true
    button4.disabled=true
    button3.style.backgroundColor='green'
    button3.disabled=true

});

button4.addEventListener('click',function(){
   
    button1.disabled=true
    button2.disabled=true
    button3.disabled=true
    button4.style.backgroundColor='green'
    button4.disabled=true

   
})


//for the enabler=enables(1,2,3,4)
enabler.addEventListener('click',function(){
  
    button1.disabled=false
    button2.disabled=false
    button3.disabled=false
    button4.disabled=false

    alert('click on ok if you want to enable all the buttons')

    button1.style.backgroundColor=''
    button2.style.backgroundColor=''
    button3.style.backgroundColor=''
    button4.style.backgroundColor=''
})





