
const url =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc";

async function getData() {
    const response = await fetch(url);
    const json = await response.json();
     
        const report = [];

        for (const key in json) {
           
            report.push(json[key])
             // console.log(json[key]);
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
};

