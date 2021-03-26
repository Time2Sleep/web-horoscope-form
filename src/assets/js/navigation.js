
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