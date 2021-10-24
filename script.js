const mezChange = document.querySelector('#teste')
const mez = document.querySelector('#mez')
const back1 = document.querySelector('.back-hov')
const bar = document.querySelector('#bar')
const mural = document.querySelector('#mural')
const music = document.querySelector('#music')

const mas = document.querySelector('#mas')
const pet = document.querySelector('#pet')
const saç = document.querySelector('#sal')
const sob = document.querySelector('#sob')
const drin = document.querySelector('#drin')
const drinAut = document.querySelector('#drinAut')
const dob1 = document.querySelector('#dob-1')
const dob2 = document.querySelector('#dob-2')
const dob3 = document.querySelector('#dob-3')
const dob4 = document.querySelector('#dob-4')
const dob5 = document.querySelector('#dob-5')
const dob6 = document.querySelector('#dob-6')
// const my = document.querySelector('#myImage')
const tac = document.querySelector('#tac')
const prat = document.querySelector('#prat')

// my.addEventListener("scroll", myFunction =>{
//     alert('ok')
// });

var navbar = document.querySelector('nav');
document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  if(posicaoy >= 2100){
    tac.classList.add("img-taca-show")
    prat.classList.add("img-prato-show")
  }else{
    tac.classList.remove("img-taca-show")
    prat.classList.remove("img-prato-show")
  }
  
  
});


pet.addEventListener("mouseover", changeMod =>{
    dob1.classList.add("corte-show")
    
})
pet.addEventListener("mouseout", changeMod =>{
    
        dob1.classList.remove("corte-show")
     
    
})

mas.addEventListener("mouseover", changeMod =>{
    dob2.classList.add("corte2-show")
    
})
mas.addEventListener("mouseout", changeMod =>{
    
        dob2.classList.remove("corte2-show")
     
    
})

sal.addEventListener("mouseover", changeMod =>{
    dob3.classList.add("corte3-show")
    
})
sal.addEventListener("mouseout", changeMod =>{
    
        dob3.classList.remove("corte3-show")
     
    
})

sob.addEventListener("mouseover", changeMod =>{
    dob4.classList.add("corte4-show")
    
})
sob.addEventListener("mouseout", changeMod =>{
    
        dob4.classList.remove("corte4-show")
     
    
})

drin.addEventListener("mouseover", changeMod =>{
    dob5.classList.add("corte5-show")
    
})
drin.addEventListener("mouseout", changeMod =>{
    
        dob5.classList.remove("corte5-show")
     
    
})

drinAut.addEventListener("mouseover", changeMod =>{
    dob6.classList.add("corte6-show")
    
})
drinAut.addEventListener("mouseout", changeMod =>{
    
        dob6.classList.remove("corte6-show")
     
    
})





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




