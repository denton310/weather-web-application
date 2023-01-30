const api = 'https://webapi19sa-1.course.tamk.cloud/v1/weather'; // API josta haetaan

function homeView() {
    document.getElementById('title').innerHTML = 'Tervetuloa sääasemalle!';
    document.getElementById('text').innerHTML = 'Miltä sää näyttää? 🌤️';
    document.getElementById('data-div').innerHTML = '';
    document.getElementById('chart-div').innerHTML = '';
    document.getElementById('interval-div').innerHTML = '';
    
}

function updateView(event) {
    
    if (event.id == 'last-values') {
        lastValues();
    }
    else if (event.id == 'temperature') {
        temperatureView();
    }
    else if (event.id == 'freechoice') {
        freechoice();
    }
}
// getData-funktio hakee dataa APIsta
const getData = async (endpoint='') => {
    let resource
    if (endpoint.length > 0) {
        resource = api + `/${endpoint}`
    } else {
        resource = api
    }
    console.log('resource', resource)
    const response = await fetch(resource)
    return await response.json()
}
function getSignalData(signal = '') {

    const interval = document.getElementById('selectInterval').value

    if(signal.length === 0){
        signal = document.getElementById('selectSignal').value
    }

    url = `${signal}/${interval}`

    getData(url).then(function (data) {
        console.log(`${api} / ${signal} / ${interval}`);
        let columns = [];
        let rows = [];
        let html = `
        <table class="table table-striped">
            <thead>
                <tr><th>Päivämäärä</th><th>Kellon aika</th>
                    <th>Arvo</th>
                </tr>
            </thead>
            <tbody>
        `;
        data.forEach(element => {
            const d = new Date(element.date_time);
            const date = d.toLocaleDateString();
            const time = d.toLocaleTimeString();
            html += `<tr><td>${date}</td><td>${time}</td><td>${element[signal]}</td></tr>`;
            columns.push(`${date} ${time}`);
            rows.push(element[signal]);

        });
        html += `</tbody></table>`;
        document.getElementById('data-div').innerHTML = html;

        echarts.dispose(document.getElementById("chart-div"));
        let myChart = echarts.init(document.getElementById("chart-div"));

        const option = { // määritellään haluttu kaavio
            title: {},
            tooltip: {},
            legend: {},
            xAxis: {
                data: columns
            },
            yAxis: {},
            series: [{
                name: signal,
                type: 'line',
                smooth: true,
                data: rows,
                areaStyle: {}
            }],
            visualMap: {
                show: false,
                pieces: [{
                    min: 0,
                    max: 100,
                    color: 'red'            // Jos lämpötila on yli 0 astetta, graafi on punainen, negatiivisella sininen
                    },
                    {
                    min: -100,
                    max: 0,
                    color: '#3477eb',
                }]
            }
     
        };

        myChart.setOption(option); // asetetaan kaavio chart-diviin
    })
        .catch((error) => {
            console.error('Error:', error);
        })
}