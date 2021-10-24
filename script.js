const mezChange = document.querySelector('#teste')
const mez = document.querySelector('#mez')
const back1 = document.querySelector('.back-hov')
const bar = document.querySelector('#bar')
const mural = document.querySelector('#mural')
const music = document.querySelector('#music')

mezChange.addEventListener("mouseover", changeMod =>{
    setTimeout(function(){ 
        back1.classList.add("back-hov-ext")
    }, 400);
    
})
mezChange.addEventListener("mouseout", changeMod =>{
    setTimeout(function(){
        back1.classList.remove("back-hov-ext")
     }, 500);
    
})


mez.addEventListener("mouseover", changeMod =>{
    setTimeout(function(){
        back1.classList.add("back-hov-mez")
     }, 400);
    
})
mez.addEventListener("mouseout", changeMod =>{
    setTimeout(function(){ 
        back1.classList.remove("back-hov-mez")
    }, 500);
    
})

bar.addEventListener("mouseover", changeMod =>{
    setTimeout(function(){ 
        back1.classList.add("back-hov-bar")}, 400);
    
})
bar.addEventListener("mouseout", changeMod =>{
    setTimeout(function(){ 
        back1.classList.remove("back-hov-bar")}, 500);
})


mural.addEventListener("mouseover", changeModo =>{
    setTimeout(function(){
        back1.classList.add("back-hov-mural")
     }, 400);
    
})
mural.addEventListener("mouseout", changeModo =>{
    setTimeout(function(){
        back1.classList.remove("back-hov-mural")
     }, 500);
    
})


music.addEventListener("mouseover", changeMod =>{
    setTimeout(function(){
        back1.classList.add("back-hov-music")
     }, 400);
    
})
music.addEventListener("mouseout", changeMod =>{
    setTimeout(function(){ 
        back1.classList.remove("back-hov-music")
    }, 500);
    
})




