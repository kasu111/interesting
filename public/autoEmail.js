//fetch weather data from api
const url =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc";

async function getData() {
    const response = await fetch(url);
    const json = await response.json();

    const report = [];

    for (const key in json) {
        report.push(json[key]);
        console.log(json[key]);
    }
    return report;
}

async function showData() {
    const data = await getData();
    const dailyReport = document.querySelector(".daily");
    dailyReport.innerHTML += `<div>${data}<div>`;
}

window.onload = async () => {
    await getData();
    await showData();
    await autoClickButton();
};
/*------------------------------------*/
//sending data to my email by clicking button

function sendEmail() {
    const dailyReport = document.querySelector(".daily");

    Email.send({
        Host: "smtp.elasticemail.com",
        port: "2525",
        Username: "carloschan11111@gmail.com",
        Password: "A51E4E065C3C2ABD86E1C1DE9C94BBA08177",
        To: "carloschan111@gmail.com",
        From: "carloschan11111@gmail.com",
        Subject: "Today weather",
        Body: `${dailyReport.innerHTML}`,
    }).then((message) => alert(message));
}

//auto click html button
let dailyEmailSent = false;

const now = new Date();
const formattedTime = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
});

function autoClickButton() {
    const ONE_HOUR_IN_MS = 60 * 60 * 1000;
    let lastEmailSentTime = Date.now();
    if (!dailyEmailSent && Date.now() - lastEmailSentTime < ONE_HOUR_IN_MS) {
        console.log(`plz click one hour later`);
        return;
    }

        let button = document.querySelector(".email");
        button.click();
        console.log(`***Button clicked at ${formattedTime}***`);
        dailyEmailSent = true;
        
    }


//everyhour refresh
// let millisUntilRefresh = now.getTime() + 60*60 * 1000 - now.getTime();
//6am auto refresh the button



// Calculate the number of milliseconds until 6am tomorrow
let millisUntil6am =
    new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // Tomorrow
        6, // 6am
        0, // 0 minutes
        0 // 0 seconds
    ) - now;

// Convert the milliseconds to seconds and set as the content of the meta refresh tag
let content = Math.floor(millisUntil6am / 1000);
document
    .querySelector('meta[http-equiv="refresh"]')
    .setAttribute("content", content);

// const now = new Date()
// const formattedTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
// console.log(formattedTime);

// crontab
// cronjob

// scheduler
