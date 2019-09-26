const brewName = document.getElementById("bar-name");
const brewCity = document.getElementById("city-name");

// let li = document.createElement("demo");
// let ul = document.getElementById("list");


let clearButton = document.getElementById("clear-button");
clearButton.addEventListener('click', clearOut);

//City
let cityInput = document.getElementById("input");
let cityButton = document.getElementById("button");
cityButton.addEventListener('click', byCity);

//State
let stateInput = document.getElementById("state-input");
let stateButton = document.getElementById("state-button");
stateButton.addEventListener('click', byState);

//Name
let nameInput = document.getElementById("name-input");
let nameButton = document.getElementById("name-button");
nameButton.addEventListener('click', byName);


let parseObject = "";

// by City
function byCity() {
    clearOut()
    // console.log(searchInput.value)

    if (cityInput.value) {
        let xhttp = new XMLHttpRequest();

        let url = `https://api.openbrewerydb.org/breweries?by_city=${cityInput.value}`;

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                parseObject = JSON.parse(this.responseText);

                for (let brew of parseObject) {
                    // console.log(`brew`, brew.name)

                    brewName.innerText = document.getElementById("bar-name").innerText + '\n' + brew.name;
                    brewCity.innerText = document.getElementById("city-name").innerText + '\n' + brew.city;
                }

            } else if (this.status == 404) {
                console.log("Not found!");
            }
            cityInput.value = '';
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }

};

// by State
function byState() {
    clearOut()

    if (stateInput.value) {
        let xhttp = new XMLHttpRequest();

        let url = `https://api.openbrewerydb.org/breweries?by_state=${stateInput.value}`;

        xhttp.onreadystatechange = function () {
            console.log("hit");
            if (this.readyState == 4 && this.status == 200) {
                // console.log(JSON.parse(this.responseText));
                parseObject = JSON.parse(this.responseText);
                // console.log(parseObject.url);

                for (let brew of parseObject) {
                    // console.log(`brew`, brew.name);
                    // const brewName = document.getElementById("bar-name");
                    brewName.innerText = document.getElementById("bar-name").innerText + '\n' + brew.name;
                    brewCity.innerText = document.getElementById("city-name").innerText + '\n' + brew.city;
                }

            } else if (this.status == 404) {
                console.log("Not found!");
            }
            stateInput.value = '';
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
};

//by Name
function byName() {
    clearOut()

    if(nameInput.value) {
    let xhttp = new XMLHttpRequest();

    let url = `https://api.openbrewerydb.org/breweries?by_name=${nameInput.value}`;

    xhttp.onreadystatechange = function () {
        console.log("hit");
        if (this.readyState == 4 && this.status == 200) {

            parseObject = JSON.parse(this.responseText);
            // console.log(parseObject.url);


            // console.log(`li`, li);

            for (let brew of parseObject) {
                console.log(`brew`, brew.name);

                //Creating new LI's
                // let li = document.createElement('li')
                // li.innerText = brew.name + ', ' + brew.city
                // ul.appendChild(li)

                brewName.innerText = document.getElementById("bar-name").innerText + '\n' + brew.name;
                brewCity.innerText = document.getElementById("city-name").innerText + '\n' + brew.city;
            }

        } else if (this.status == 404) {
            console.log("Not found!");
        }
        nameInput.value = '';
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    }
};

// Clear listings
function clearOut() {

    while (brewName.hasChildNodes()) {
        brewName.firstChild.remove();
    }

    while (brewCity.hasChildNodes()) {
        brewCity.firstChild.remove();
    }
};