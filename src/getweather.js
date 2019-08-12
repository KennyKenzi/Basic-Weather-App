const weatherdata = {
  overallDataUrl: "http://api.openweathermap.org/data/2.5/weather",
  dailyDataUrl: "http://api.openweathermap.org/data/2.5/forecast"
};


// function spoolDates(){
//     const today = 8


// };

// function getDate(value) {
//     var Datez = new Date(),
//     day = Datez.getDate(),
//     month = Datez.getMonth(),
//     year = Datez.getFullYear();

//     if(month<10){
//         month = '0' + month
//     }
//     if(day<10){
//         day = '0' + day 
//     }


//     const day1 = new Date(year, month, day+2)
//     // const nextWeek = year- month"-"day

//     const fulldate = year + "-" + month + "-" + day;
//     console.log(day1)
//     return fulldate;
// }

module.exports = { weatherdata};
