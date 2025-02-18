let modals = document.querySelectorAll('.modal')
let modalWindow = document.querySelector('.modal_window')
let remove_btn = document.querySelector('.remove_window')
for(i=0 ; i<modals.length ; i++){
    modals[i].addEventListener('click' , ()=>{
        display();
    })
}

remove_btn.addEventListener('click' , ()=>{
   hide();
})

document.addEventListener('keydown' , (e)=>{
   if(e.key==='Escape'){
    hide();
   }
})
function display(){
    modalWindow.classList.remove('hidden')
}
function hide (){
    modalWindow.classList.add('hidden')
}