let today = new Date();
let year = 1900 + today.getYear();
let monthStr = ''
let monthJs = today.getMonth();
const calendarMonthAndYear = document.querySelector('.calendar__monthAndYear');
const tbody = document.querySelector('tbody');
const prev = document.querySelector('.calendar__prev');
const next = document.querySelector('.calendar__next');
let counting =false 
let dateNumber = 1;
const form__date = document.querySelector('.form__date');



function translateSunMon(nr){
nr--;
if(nr<0) nr=6
return nr
}

//function changes months from format 1 to 01 and to string
function changeMonthtoTwoDigitFormat(mth){
    mth++;
    if(mth.toString().length==1){
        return `0${mth}`
    }else{
        return mth.toString();
    }
    }



function displayMonth(){

    switch(monthJs){
        case 0: monthStr ='January';
        break;
        case 1: monthStr ='February';
        break;
        case 2: monthStr ='March';
        break;
        case 3: monthStr ='April';
        break;
        case 4: monthStr ='May';
        break;
        case 5: monthStr ='June';
        break;
        case 6: monthStr ='July';
        break;
        case 7: monthStr ='August';
        break;
        case 8: monthStr ='September';
        break;
        case 9: monthStr ='October';
        break;
        case 10: monthStr ='November';
        break;
        case 11: monthStr ='December';
        break;
    }

    calendarMonthAndYear.textContent=monthStr + ' ' +year
}


function numberOfDaysFunction(){
    return new Date(year, monthJs+1,0).getDate();
}


let firstDayOfTheMonth = new Date(year+"-"+changeMonthtoTwoDigitFormat(monthJs)).getDay();
let transformedFirstDayOfTheMonth = translateSunMon(firstDayOfTheMonth);


let numberOfDays = numberOfDaysFunction()




//Create tr/td and insert days
function createCalendar(){
    for(let i=0;i<6;i++){
        //prevent from making last row empty
        if(dateNumber>=numberOfDays)return;

        let tr = document.createElement('tr');
        tbody.appendChild(tr)
        
        for(let j=0;j<7;j++){
           
        let td = document.createElement('td');
        if(i==0 && j==transformedFirstDayOfTheMonth){
        counting=true
        }
        
        if(counting && dateNumber<=numberOfDays){
            td.textContent = dateNumber;
            dateNumber++
        }
        tr.appendChild(td)
        }
        }
}



prev.addEventListener('click', prevMonth)
next.addEventListener('click', nextMonth)


function prevMonth(){    
    counting =false; 
    dateNumber = 1;    
    monthJs -=1;
    if(monthJs<0){
        year -=1;
        monthJs = 11
    } 
    let firstDayOfTheMonth = new Date(year+"-"+changeMonthtoTwoDigitFormat(monthJs)).getDay();
    transformedFirstDayOfTheMonth = translateSunMon(firstDayOfTheMonth);
    tbody.innerHTML='';
    numberOfDays = numberOfDaysFunction()
    displayMonth()
    createCalendar()
    };



function nextMonth(){    
counting =false; 
dateNumber = 1;
monthJs +=1;
if(monthJs>11){
    year +=1;
    monthJs = 0
} 
let firstDayOfTheMonth = new Date(year+"-"+changeMonthtoTwoDigitFormat(monthJs)).getDay();
transformedFirstDayOfTheMonth = translateSunMon(firstDayOfTheMonth);
tbody.innerHTML='';
numberOfDays = numberOfDaysFunction()
displayMonth()
createCalendar()
};



//Fire functions
displayMonth()
createCalendar()
