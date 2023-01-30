
function homeView() {
    document.getElementById("title-div").innerHTML="<h1>Tervetuloa sääasemalle!</h1>";
    document.getElementById("data-div").innerHTML= `Miltä sää näyttää? 🌤`;
}

function updateView(event) {
    const d = new Date();
    console.log(d);

    const date = d.toLocaleDateString();
    const time = d.toLocaleTimeString();
    document.getElementById("data-div").innerHTML=`${date} ${time}`;
    if (event.id == "temperature") {
        document.getElementById("title-div").innerHTML="<h1>Lämpötila</h1>";
    }
    else if (event.id == "wind-speed") {
        document.getElementById("title-div").innerHTML="<h1>Tuulennopeus</h1>";
    }
}
