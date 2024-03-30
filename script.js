let btn= document.getElementById('btn')
let input=document.querySelector('input')
let arr=[];


let c=0;
btn.addEventListener('click',()=>
{
arr.push(input.value);
arr.map(items=>{
c++;
let p= document.createElement('p');
p.innerText=`${c} ${items} (${new Date().toLocaleTimeString()})`;
document.body.appendChild(p);

p.addEventListener('dblclick',()=>
{
    p.innerText=`✅ Completed at  (${new Date().toLocaleTimeString()})`;
})




}


)

input.value='';
arr.pop();
}



)

