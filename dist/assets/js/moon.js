let moonHoroscopeEditForm = document.querySelector(".edit-moon");

function openMoonEdit(){
     document.querySelector(".add__horoscope-moon").classList.add("display_none");
    document.querySelector(".moon__content").classList.add("display_none");
    moonHoroscopeEditForm.classList.add("display_block");
}


let moonHoroscopes = JSON.parse(localStorage.getItem('moonHoroscopes'));
if(moonHoroscopes == null) moonHoroscopes = [];

const saveMoonHoroscope = (event) => {
    event.preventDefault();
        let dayMoonHoroscope = {
            id: moonHoroscopes.length,
            date: document.getElementById("edit__format-day-moon").value,
            sign: document.getElementById("edit__sign-moon").value,
            horoscope: document.getElementById("edit__textarea-moon").value
        }
        moonHoroscopes.push(dayMoonHoroscope);
        document.getElementById('edit-form-moon').reset();
        localStorage.setItem('moonHoroscopes', JSON.stringify(moonHoroscopes));    
}

document.querySelector(".edit__apply-moon").addEventListener('click', saveMoonHoroscope);



//CREATE TABLE FROM JSON

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

if(moonHoroscopes!=null) moonHoroscopes = moonHoroscopes.sort(GetSortOrder("date"));

buildMoonTable(moonHoroscopes, "day");

function buildMoonTable(data, format){
    let table = document.querySelector(".table__body-moon");
    if(data != null){

        let count = (data.length>100)?100:data.length;
        for(let i = 0; i < count; i++){
            let row = `
            <tr class="table__row">
                <td class="table__date">${data[i].date}</td>
                <td class="table__date">${signs[data[i].sign]}</td>
                <td class="table__text">${data[i].horoscope}</td>
                <td class="table__edit table__edit-moon" data-id="${data[i].id}" onclick="editExistingMoon(this)"><a href="#">Edit</a></td>
                <td class="table__edit table__edit-moon" data-id="${data[i].id}" onclick="deleteExistingMoon(this)"><a href="#">Delete</a></td>
            </tr> `;
            table.innerHTML += row;
        }
    }
}


function editExistingMoon(btn){
   
     document.querySelector(".add__horoscope-moon").classList.add("display_none");
    
    document.querySelector(".moon__content").classList.add("display_none");
    moonHoroscopeEditForm.classList.add("display_block");
    
    document.querySelector(".edit__apply-moon").classList.add("display_none");
    document.querySelector(".edit__change-moon").classList.remove("display_none");
    
    let id = Array.from(btn.parentNode.parentNode.children).indexOf(btn.parentNode);
    document.querySelector(".edit__change-moon").dataset.id = id;
    
    let toEdit = JSON.parse(localStorage.getItem('moonHoroscopes'))[id];
    
    document.getElementById("edit__format-day-moon").value = toEdit.date;
    document.getElementById("edit__sign-moon").value= toEdit.sign;
    document.getElementById("edit__textarea-moon").value = toEdit.horoscope;
    
}

function deleteExistingMoon(btn){
    let id = Array.from(btn.parentNode.parentNode.children).indexOf(btn.parentNode);
    let toEdit = JSON.parse(localStorage.getItem('moonHoroscopes'));
    
    toEdit.splice(id, 1);
    
    localStorage.setItem('moonHoroscopes', JSON.stringify(toEdit));
    document.location.href = "/";
}

let changeMoonBtn = document.querySelector(".edit__change-moon");

const saveChangesMoon = (event) => {
    event.preventDefault();
    
    let getData = JSON.parse(localStorage.getItem('moonHoroscopes'));
    
    
    getData[changeMoonBtn.dataset.id].sign = document.getElementById("edit__sign-moon").value;
    getData[changeMoonBtn.dataset.id].date = document.getElementById("edit__format-day-moon").value;
    getData[changeMoonBtn.dataset.id].horoscope = document.getElementById("edit__textarea-moon").value;
    
    localStorage.setItem('moonHoroscopes', JSON.stringify(getData));
    document.location.href = "/";
}

changeMoonBtn.addEventListener('click', saveChangesMoon);