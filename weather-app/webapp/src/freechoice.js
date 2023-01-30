function freechoice(api) {
    document.getElementById('title').innerHTML = 'Vapaa signaali'
    document.getElementById('text').innerHTML = ''
    document.getElementById('data-div').innerHTML = ''
    document.getElementById('interval-div').innerHTML = `
    <label>Signaali</label>
    <select id="selectSignal" class="form-control selcls" onchange="getSignalData()">
        <option value="temperature"selected>Lämpötila</option>
        <option value="light">Valo</option>
        <option value="wind_speed">Tuulen nopeus</option>
        <option value="wind_direction">Tuulen suunta</option>
        <option value="humidity_out">Kosteus ulkona</option>
        <option value="humidity_in">Kosteus sisällä</option>
    </select> 

    <label></br>Arvo</label>
    <select id="selectInterval" class="form-control selcls" onchange="getSignalData()">
        <option value="live">Live</option>
        <option value="24" selected>24</option>
        <option value="48">48</option>
        <option value="72">72</option>
        <option value="168">1 week</option>
        <option value="744">1 month</option>
    </select> 
    `
    getSignalData();
}
