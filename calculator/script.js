const container = document.querySelector('.container')
let disp = document.querySelector('.display')
const newRow1 = document.createElement('div')
newRow1.classList.add('row' , 'row1')
container.appendChild(newRow1); 

const newRow2 = document.createElement('div')
newRow2.classList.add('row' , 'row2')
container.appendChild(newRow2); 

const newRow3 = document.createElement('div')
newRow3.classList.add('row' , 'row3')
container.appendChild(newRow3); 

disp.textContent = 0  

let arr = [];


function btn1(str) {
  const newBtn = document.createElement("button");
  let val = Number(str)
  arr[0] = val
  console.log(arr[0])
  newBtn.textContent = val;
  newBtn.classList.add('btn')

  newRow1.appendChild(newBtn);    
  newBtn.addEventListener('click' , (e)=>{
    console.log(val)
    disp.textContent = val
})


}
function btn2(str) {
    const newBtn = document.createElement("button");
    let val = Number(str)
    
    newBtn.textContent = val;
    newBtn.classList.add('btn')
  
    newRow2.appendChild(newBtn);    
   
    newBtn.addEventListener('click' , (e)=>{
          console.log(val)
          disp.textContent = val
      
    })
  
}
function btn3(str) {
  const newBtn = document.createElement("button");
  let val = Number(str)
  newBtn.textContent = val;
  newBtn.classList.add('btn')

  newRow3.appendChild(newBtn);    
 
  newBtn.addEventListener('click' , (e)=>{
    console.log(val)
    disp.textContent = val

})

}


btn1("7")
btn1("8")
btn1("9")

btn2("4")
btn2("5")
btn2("6")

btn3("1")
btn3("2")
btn3("3")

console.log(container)