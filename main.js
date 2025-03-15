
let box2=document.querySelector(".box2")
let img=document.querySelector("img")
let box3=document.querySelector(".box3")
let iconbox=document.querySelector(".iconbox")



// yaha par box2 ko click kare geto 1aad hoga 
let nu=1;
const plu=()=>{
    if(p.innerText=nu)
    nu++
    console.log(nu);
    
}

box2.addEventListener("dblclick",plu)




// yha par box2 ke ander  imge ko rkha he 
box2.addEventListener("dblclick",()=>{
    img.style.display="block"
})

box2.addEventListener("dblclick",()=> {
    if(img.style.display==="none"){
        img.style.display="block";
      }else{
        setTimeout(()=>{
            img.style.display="none";
        },1000)
      }

})




// yaha par icon ko click kara he to lick hoga 
iconbox.addEventListener("click",()=>{
    img.style.display="block"
})

iconbox.addEventListener("click",()=> {
  if(img.style.display==="none"){
    img.style.display="block";
  }else{
    setTimeout(()=>{
        img.style.display="none";
    },1000)
  }
   
})







// yha par mene icon par click karte he to 1add hoga 
let p = document.querySelector("p");
let bold1=document.getElementById("#bold1")
let iconbo=document.querySelector(".iconbox")




let num=1;
const plus=()=>{
    p.innerText=num
    num++
    console.log(num);
    
}

iconbox.addEventListener("click",plus)


// const minus=()=>{
//     --num
//     p.innerText=num
//     console.log(num);
    
// }

// iconbox.addEventListener("click",minus)