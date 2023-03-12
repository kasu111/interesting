//fetch weather data from api
const url =
"https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc";

async function getData() {
const response = await fetch(url);
const json = await response.json();
 
    const report = [];

    for (const key in json) {
       
        report.push(json[key])
         console.log(json[key]);
    }
    return report;
}


async function showData() {
const data = await getData();
const dailyReport =  document.querySelector(".daily")
dailyReport.innerHTML += `<div>${data}<div>`;

}

window.onload = async () => {
await getData();
await showData();
await autoClickButton();
};
/*------------------------------------*/
//sending data to my email by clicking button

function sendEmail(){
    const dailyReport =  document.querySelector(".daily")

Email.send({
Host : "smtp.elasticemail.com",
port : "2525",
Username : "carloschan11111@gmail.com",
Password : "A51E4E065C3C2ABD86E1C1DE9C94BBA08177",
To : 'carloschan111@gmail.com',
From : "carloschan11111@gmail.com",
Subject : "Today weather",
Body : `${dailyReport.innerHTML}`
}).then(
message => alert(message)
);
}

//auto click html button
let dailyEmailSent = false;

 const now = new Date()
const formattedTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });


function autoClickButton() {
    if(!dailyEmailSent){
    let button = document.querySelector('.email')
    button.click();
    console.log(`***Button clicked at ${formattedTime}***`)
    dailyEmailSent = true;
    }
  }
 

//8am auto refresh the button




//everyday 8am sending-data automation


// const now = new Date()
// const formattedTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
// console.log(formattedTime);

// if(formattedTime.hour12 == "AM" && formattedTime.hour == "11" && formattedTime.second == "10"){
//     document.querySelector('.email').click()
// }

// crontab
// cronjob

// scheduler





