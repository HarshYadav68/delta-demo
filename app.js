let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


 
btn.addEventListener("click",()=>{
   
    for(let i = 1 ; i <= 10 ; i++){
        let p = document.createElement("p");
        p.innerText = `${input.value}  X  ${i}  = ${ input.value * i }  `;
        ul.append(p); 
    }
     
    let hr = document.createElement("hr");
    ul.append(hr);

    input.value='';
})
