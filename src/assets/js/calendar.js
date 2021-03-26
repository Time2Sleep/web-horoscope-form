const testJSON = [
    {
        date: '2021-03-25',
        horoscope0: 'horoscope1',
        horoscope1: 'horoscope1',
        horoscope2: 'horoscope1',
        horoscope3: 'horoscope1',
        horoscope4: 'horoscope1',
        horoscope5: 'horoscope1',
        horoscope6: 'horoscope1',
        horoscope7: 'horoscope1',
        horoscope8: 'horoscope1',
        horoscope9: 'horoscope1',
        horoscope10: 'horoscope1',
        horoscope11: 'horoscope1'
    },
    {
        date: '2021-03-28',
        horoscope0: 'horoscope4',
        horoscope1: 'horoscope4',
        horoscope2: 'horoscope4',
        horoscope3: 'horoscope4',
        horoscope4: 'horoscope4',
        horoscope5: 'horoscope4',
        horoscope6: 'horoscope4',
        horoscope7: 'horoscope4',
        horoscope8: 'horoscope4',
        horoscope9: 'horoscope4',
        horoscope10: 'horoscope4',
        horoscope11: 'horoscope4'
    },
    {
        date: '2021-02-21',
        horoscope0: 'horoscope4',
        horoscope1: 'horoscope4',
        horoscope2: 'horoscope4',
        horoscope3: 'horoscope4',
        horoscope4: 'horoscope4',
        horoscope5: 'horoscope4',
        horoscope6: 'horoscope4',
        horoscope7: 'horoscope4',
        horoscope8: 'horoscope4',
        horoscope9: 'horoscope4',
        horoscope10: 'horoscope4',
        horoscope11: 'horoscope4'
    },
    {
        date: '2020-12-28',
        horoscope0: 'horoscope4',
        horoscope1: 'horoscope4',
        horoscope2: 'horoscope4',
        horoscope3: 'horoscope4',
        horoscope4: 'horoscope4',
        horoscope5: 'horoscope4',
        horoscope6: 'horoscope4',
        horoscope7: 'horoscope4',
        horoscope8: 'horoscope4',
        horoscope9: 'horoscope4',
        horoscope10: 'horoscope4',
        horoscope11: 'horoscope4'
    }];




const months = ['Январь', 'Февраль', 'Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const signs = ['Овен', 'Телец', 'Близнецы','Рак','Лев','Дева','Весы','Скорпион','Стрелец','Козерог','Водолей','Рыбы'];


document.querySelector(".calendar__next").onclick = nextMonth;
document.querySelector(".calendar__prev").onclick = prevMonth;
const monthPlacer = document.querySelector(".calendar__month");
let monthName = document.querySelector(".calendar__month-name");
let yearName = document.querySelector(".calendar__year-name");
let curMonth = new Date().getMonth()+1;
let curYear = new Date().getFullYear();


function prevMonth(){
    curMonth--;
    if(curMonth==0){
        curMonth=12;
        curYear--;
    }
    fillCalendar(curMonth,curYear);
}

function nextMonth(){
    curMonth++;   
    if(curMonth==13){
        curMonth=1;
        curYear++;
    }
    fillCalendar(curMonth,curYear); 
}

function fillCalendar(month , year){ 
    monthPlacer.innerHTML = ``;
    let numberOfDays = new Date(year, month, 0).getDate();
    
    for(let i = 0; i<numberOfDays;i++){
        let day= i+1;
        let style = "";
        let stringDate = year+'-'+((month<10)?'0'+month:month)+'-'+((day<10)?'0'+day:day);
        
        testJSON.forEach(item => {
            if(item.date == stringDate) {
                style="calendar__day-green";
            }
        })
        
        monthPlacer.innerHTML += `<a href="#" class="calendar__day ${style}" onclick="openDayEdit('${stringDate}')">${day}</a>`;
    }
    monthName.innerHTML = months[curMonth-1];
    yearName.innerHTML = curYear;
}

fillCalendar(curMonth, curYear);

function openDayEdit(stringDate){
        console.log(stringDate);
    document.location.href = `/edit.html?date=${stringDate}`;
}




