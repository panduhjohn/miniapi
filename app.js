let brewName = document.getElementById("barName");
let brewCity = document.getElementById("result1");
let brewCountry = document.getElementById("result2");
let brewSite = document.getElementById("result3");

let clearButton = document.getElementById("clear-button")
clearButton.addEventListener('click', clearOut)

//City
let cityInput = document.getElementById("input")
let cityButton = document.getElementById("button")
cityButton.addEventListener('click', byCity)

//State
let stateInput = document.getElementById("state-input")
let stateButton = document.getElementById("state-button")
stateButton.addEventListener('click', byState)

//Name
let nameInput = document.getElementById("name-input")
let nameButton = document.getElementById("name-button")
nameButton.addEventListener('click', byName)


let parseObject = "";

// by City
function byCity() {
    // console.log(searchInput.value)
    let xhttp = new XMLHttpRequest();

    let url = `https://api.openbrewerydb.org/breweries?by_city=${cityInput.value}`;

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            parseObject = JSON.parse(this.responseText);
            // console.log(parseObject.url);

            for (let brew of parseObject) {
                console.log(`brew`, brew.name);

                brewName.innerText = document.getElementById("barName").innerText + '\n' + brew.name;
                brewCity.innerText = document.getElementById("result1").innerText + '\n' + brew.city;
            }
        } else if (this.status == 404) {
            console.log("Not found!");
        }
        cityInput.value = '';
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};

// by State
function byState() {
    let xhttp = new XMLHttpRequest();

    let url = `https://api.openbrewerydb.org/breweries?by_state=${stateInput.value}`;

    xhttp.onreadystatechange = function () {
        console.log("hit");
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            parseObject = JSON.parse(this.responseText);
            // console.log(parseObject.url);

            for (let brew of parseObject) {
                console.log(`brew`, brew.name);

                brewName.innerText = document.getElementById("barName").innerText + '\n' + brew.name;
                brewCity.innerText = document.getElementById("result1").innerText + '\n' + brew.city;

            }

        } else if (this.status == 404) {
            console.log("Not found!");
        }
        stateInput.value = '';
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};

//by Name
function byName() {
    let xhttp = new XMLHttpRequest();

    let url = `https://api.openbrewerydb.org/breweries?by_name=${nameInput.value}`;

    xhttp.onreadystatechange = function () {
        console.log("hit");
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            parseObject = JSON.parse(this.responseText);
            // console.log(parseObject.url);

            for (let brew of parseObject) {
                console.log(`brew`, brew.name);

                brewName.innerText = document.getElementById("barName").innerText + '\n' + brew.name;
                brewCity.innerText = document.getElementById("result1").innerText + '\n' + brew.city;
            }
                
        } else if (this.status == 404) {
            console.log("Not found!");
        }
        nameInput.value = '';
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};

function clearOut() {
    let brewName = document.getElementById("barName");
    let brewCity = document.getElementById("result1");

    while (brewName.hasChildNodes()) {
        brewName.firstChild.remove();
    }

    while (brewCity.hasChildNodes()) {
        brewCity.firstChild.remove();
    }

}