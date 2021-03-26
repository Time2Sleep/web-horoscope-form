

function onRem() {
    let width = document.documentElement.clientWidth;
    switch (true) {
        case (width > 650):
            document.documentElement.style.fontSize = width / 1920 + 'px';
            break;
        case (width < 650):
            document.documentElement.style.fontSize = width / 320 + 'px';
            break;
    }
}

window.addEventListener('resize', onRem);

onRem();

let calendar = document.querySelector(".calendar");
let table = document.querySelector(".table");
let links = document.querySelectorAll(".horoscope__link");

function openCalendar(link){
    links.forEach((link) => {
          link.classList.remove("horoscope__link-active") 
    });
    
    calendar.classList.remove("display_none"); 
    table.classList.add("display_none"); 
    link.classList.add("horoscope__link-active");
}

function openTable(link){ 
    links.forEach((link) => {
          link.classList.remove("horoscope__link-active") 
    });
                         
    calendar.classList.add("display_none");  
    table.classList.remove("display_none"); 
    link.classList.add("horoscope__link-active"); 
}



function syncRangeSliders(){
    let loveLevel = document.getElementById("loveLevel").value;
    document.getElementById("loveLevel-text").value = loveLevel+"%";
    
    let frLevel = document.getElementById("friendshipLevel").value;
    document.getElementById("friendshipLevel-text").value = frLevel+"%";
    
    let marLevel = document.getElementById("marriageLevel").value;
    document.getElementById("marriageLevel-text").value = marLevel+"%";
    
    let compatLevel = document.getElementById("compatLevel").value;
    document.getElementById("compatLevel-text").value = compatLevel+"%";
}