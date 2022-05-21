const theBox = document.querySelector(".box");
const boxContainer = document.querySelector(".container");





function change () {
    const randomNumber = Math.random()*1000;
    const width = Math.random()*250;
    const rgba = `${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`; 
    theBox.style.background = `rgba(${rgba})`;
    theBox.style.transform = `translateX(${randomNumber}%)`;
    theBox.style.width = `${width}px`;
    theBox.style.height = `${width}px`;
    console.log(theBox);
    return a =  `${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`; 
    
}