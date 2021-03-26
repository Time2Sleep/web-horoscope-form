
let navLinks = document.querySelectorAll('.nav__link');
let contents = document.querySelectorAll('.main__content');

navLinks.forEach(function callback(link, index) {
    link.addEventListener('click', function(){
       changeTab(index); 
    });
});

function changeTab(id){
    navLinks.forEach(function callback(link, index){
        link.classList.remove("nav__link-active");
    });
    contents.forEach(function callback(content, index){
        content.classList.remove("main__content-active");
    });
    
    navLinks[id].classList.add("nav__link-active");
    contents[id].classList.add("main__content-active");
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







