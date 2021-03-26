let signs = [
    'Овен', 
    'Телец', 
    'Близнецы', 
    'Рак', 
    'Лев',
    'Дева',
    'Весы',
    'Скорпион',
    'Стрелец',
    'Козерог',
    'Водолей',
    'Рыбы'];



let horoscopeLinks = document.querySelectorAll('.horoscope__link');
let horoscopeContents = document.querySelectorAll('.horoscope__content');
let simpleHoroscopeEditForm = document.querySelector(".edit-simple");




horoscopeLinks.forEach(function callback(link, index) {
    link.addEventListener('click', function(){
       changeHoroscopeTab(index); 
    });
});

function changeHoroscopeTab(id){
    horoscopeLinks.forEach(function callback(link, index){
        link.classList.remove("horoscope__link-active");
    });
    horoscopeContents.forEach(function callback(content, index){
        content.classList.remove("horoscope__content-active");
    });
    
    horoscopeLinks[id].classList.add("horoscope__link-active");
    horoscopeContents[id].classList.add("horoscope__content-active");
}

document.querySelector(".edit__format-day").value = new Date().toISOString().substr(0, 10);
let formatChoose = document.querySelector(".edit__format");
let inputs = document.querySelectorAll(".edit__format-option");

function editSimpleFormatChoose(){    
    inputs.forEach(function callback(link, index){
        link.classList.remove("display_block");
    });
    
    if(formatChoose.value === "day")
        inputs[0].classList.add("display_block");
    if(formatChoose.value === "week")   
        inputs[1].classList.add("display_block");
    if(formatChoose.value === "month")  
        inputs[2].classList.add("display_block");
    
}


//Открыть окно редактирования простого гороскопа

function openSimpleEdit(){
   
    document.querySelector(".horoscope__nav").classList.add("display_none");    document.querySelector(".add__horoscope-simple").classList.add("display_none");
    
    horoscopeContents.forEach(function callback(content, index){
        content.classList.remove("horoscope__content-active");
    });
    simpleHoroscopeEditForm.classList.add("display_block");
}




//кнопка назад в редактировании
const goBackSimple = (event) =>{
   event.preventDefault();
    document.querySelector(".horoscope__nav").classList.remove("display_none");    document.querySelector(".add__horoscope").classList.remove("display_none");
    
    horoscopeContents[0].classList.add("horoscope__content-active");
    simpleHoroscopeEditForm.classList.remove("display_block");
}



//СОХРАНЕНИЕ В JSON
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return -1;    
        } else if (a[prop] < b[prop]) {    
            return 1;    
        }    
        return 0;    
    }    
}    


//сюда сохраняются простые гороскопы на день
let daySimpleHoroscopes = JSON.parse(localStorage.getItem('dayHoroscopes'));
if(daySimpleHoroscopes == null) daySimpleHoroscopes = [];

//сюда сохраняются простые гороскопы на неделю
let weekSimpleHoroscopes = JSON.parse(localStorage.getItem('weekHoroscopes'));
if(weekSimpleHoroscopes == null) weekSimpleHoroscopes = [];

//сюда сохраняются простые гороскопы на неделю
let monthSimpleHoroscopes = JSON.parse(localStorage.getItem('monthHoroscopes'));
if(monthSimpleHoroscopes == null) monthSimpleHoroscopes = [];

const saveSimpleHoroscope = (event) => {
    event.preventDefault();
    
    if(formatChoose.value === "day"){
        let daySimpleHoroscope = {
            id: daySimpleHoroscopes.length,
            date: document.getElementById("edit__format-day-simple").value,
            sign: document.getElementById("edit__sign-simple").value,
            horoscope: document.getElementById("edit__textarea-simple").value
        }
        daySimpleHoroscopes.push(daySimpleHoroscope);
        document.getElementById('edit-form-simple').reset();
        daySimpleHoroscopes = daySimpleHoroscopes.sort(GetSortOrder('date'));
        localStorage.setItem('dayHoroscopes', JSON.stringify(daySimpleHoroscopes));
        
    }
    else if(formatChoose.value === "week"){
        let weekSimpleHoroscope = {
            id: weekSimpleHoroscopes.length,
            date: document.getElementById("edit__format-week-simple").value,
            sign: document.getElementById("edit__sign-simple").value,
            horoscope: document.getElementById("edit__textarea-simple").value
        }
        weekSimpleHoroscopes.push(weekSimpleHoroscope);
        document.getElementById('edit-form-simple').reset();
        weekSimpleHoroscopes=weekSimpleHoroscopes.sort(GetSortOrder('date'));
        localStorage.setItem('weekHoroscopes', JSON.stringify(weekSimpleHoroscopes));
    }
    else if(formatChoose.value === "month"){
        let monthSimpleHoroscope = {
            id: monthSimpleHoroscopes.length,
            date: document.getElementById("edit__format-month-simple").value,
            sign: document.getElementById("edit__sign-simple").value,
            horoscope: document.getElementById("edit__textarea-simple").value
        }
        monthSimpleHoroscopes.push(monthSimpleHoroscope);
        document.getElementById('edit-form-simple').reset();
        monthSimpleHoroscopes=monthSimpleHoroscopes.sort(GetSortOrder('date'));
        localStorage.setItem('monthHoroscopes', JSON.stringify(monthSimpleHoroscopes));
    }       
}

document.querySelector(".edit__apply-simple").addEventListener('click', saveSimpleHoroscope);



//CREATE TABLE FROM JSON


buildSimpleDayTable(daySimpleHoroscopes, "day");
buildSimpleDayTable(weekSimpleHoroscopes, "week");
buildSimpleDayTable(monthSimpleHoroscopes, "month");
function buildSimpleDayTable(data, format){
    let table = document.querySelector(".table__body-simple-"+format);
    if(data != null){

        let count = (data.length>100)?100:data.length;
        for(let i = 0; i < count; i++){
            let row = `
            <tr class="table__row">
                <td class="table__date">${data[i].date}</td>
                <td class="table__date">${signs[data[i].sign]}</td>
                <td class="table__text">${data[i].horoscope}</td>
                <td class="table__edit table__edit-simple" data-id="${data[i].id}" data-format="${format}" onclick="editExistingSimple(this)"><a href="#">Edit</a></td>
                <td class="table__edit table__edit-simple" data-id="${data[i].id}" data-format="${format}" onclick="deleteExistingSimple(this)"><a href="#">Delete</a></td>
            </tr> `;
            table.innerHTML += row;
        }
    }
}

function editExistingSimple(btn){
   
   document.querySelector(".horoscope__nav").classList.add("display_none");    document.querySelector(".add__horoscope-simple").classList.add("display_none");
    
    horoscopeContents.forEach(function callback(content, index){
        content.classList.remove("horoscope__content-active");
    });
    simpleHoroscopeEditForm.classList.add("display_block");
    
    document.querySelector(".edit__apply-simple").classList.add("display_none");
    document.querySelector(".edit__change-simple").classList.remove("display_none");
    
    let id = Array.from(btn.parentNode.parentNode.children).indexOf(btn.parentNode);
    let format = btn.dataset.format;
    document.querySelector(".edit__change-simple").dataset.id = id;
    
    let toEdit = JSON.parse(localStorage.getItem(format+'Horoscopes'))[id];
    
    document.getElementById("edit__format").value = format;
    editSimpleFormatChoose();
    document.getElementById("edit__format-"+format+"-simple").value = toEdit.date;
    document.getElementById("edit__sign-simple").value= toEdit.sign;
    document.getElementById("edit__textarea-simple").value = toEdit.horoscope;
    
}

function deleteExistingSimple(btn){
    let id = Array.from(btn.parentNode.parentNode.children).indexOf(btn.parentNode);
    console.log(id);
    let format = btn.dataset.format;
    let toEdit = JSON.parse(localStorage.getItem(format+'Horoscopes'));
    
    toEdit.splice(id, 1);
    
    localStorage.setItem(format+'Horoscopes', JSON.stringify(toEdit));
    document.location.href = "/";
}

let changeBtn = document.querySelector(".edit__change-simple");
const saveChangesSimple = (event) => {
    event.preventDefault();
    
    let format = document.getElementById("edit__format").value
    let getData = JSON.parse(localStorage.getItem(format+'Horoscopes'));
    
    
    getData[changeBtn.dataset.id].sign = document.getElementById("edit__sign-simple").value;
    getData[changeBtn.dataset.id].date = document.getElementById("edit__format-"+format+"-simple").value;
    getData[changeBtn.dataset.id].horoscope = document.getElementById("edit__textarea-simple").value;
    
    localStorage.setItem(format+'Horoscopes', JSON.stringify(getData));
    document.location.href = "/";
}

changeBtn.addEventListener('click', saveChangesSimple);


