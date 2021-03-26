
//= rem.js
//= navigation.js



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







