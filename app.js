// movement annimation to 
const card=document.querySelector(".card");
const container=document.querySelector(".container");
// items 
const title=document.querySelector(".title")
const sneakers=document.querySelector(".sneakers img")
const purchase=document.querySelector(".purchase button")
const description=document.querySelector(".info h3")
const sizes=document.querySelector(".sizes")

// moving animation event 
container.addEventListener("mousemove",(e)=>{
    let xaxis= ((window.innerWidth/2 - e.pageX)/20);
    let yaxis= ((window.innerHeight/2 - e.pageY))/20;
    card.style.transform=`rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;
})
// animation in
container.addEventListener("mouseenter", (e) => {
    card.style.transition="none";
    //popout
    title.style.transform="translateZ(150px)"
    description.style.transform="translateZ(125px)"
    sizes.style.transform="translateZ(100px)"
    sneakers.style.transform="translateZ(200px) rotateZ(-45deg)"
    purchase.style.transform="translateZ(75px)"
})
// animation out 
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform="translateZ(0px)"
    description.style.transform="translateZ(0px)"
    sizes.style.transform="translateZ(0px)"
    sneakers.style.transform="translateZ(0px) rotateZ(0deg)"
    purchase.style.transform="translateZ(0px)"
});