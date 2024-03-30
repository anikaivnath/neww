let btn= document.getElementById('btn')
let input=document.querySelector('input')
let arr=[];


btn.addEventListener('click',()=>
{
arr.push(input.value);
arr.map(items=>{
let p= document.createElement('p');
p.innerText=items;
document.body.appendChild(p);

})

input.value='';
arr.pop();
}



)

