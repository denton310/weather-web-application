function temperatureView(api) {
    document.getElementById('title').innerHTML = 'Lämpötila'
    document.getElementById('text').innerHTML = ''
    document.getElementById('data-div').innerHTML = ''
    document.getElementById('interval-div').innerHTML = `
    <select id="selectInterval" class="form-control selcls" onchange="getSignalData('temperature')">
        <option value="">Live</option>
        <option value="24" selected>24</option>
        <option value="48">48</option>
        <option value="72">72</option>
        <option value="168">1 week</option>
        <option value="744">1 month</option>
    </select> 
`
    getSignalData('temperature');
}

