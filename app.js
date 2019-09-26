let brewName = document.getElementById("result");
let brewCity = document.getElementById("result1");
let brewCountry = document.getElementById("result2");
let brewSite = document.getElementById("result3");

let searchInput = document.getElementById("input")

let button = document.getElementById("button")

button.addEventListener('click', runData)



let parseObject = "";

function runData() {
    console.log(searchInput.value)
    let xhttp = new XMLHttpRequest();

    let url = `https://api.openbrewerydb.org/breweries?by_state=${searchInput.value}`;

    xhttp.onreadystatechange = function () {
        console.log("hit");
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            parseObject = JSON.parse(this.responseText);
            // console.log(parseObject.url);

            for (let brew of parseObject) {
                console.log(`brew`, brew.name);

                brewName.innerText = document.getElementById("result").innerText + '\n' + brew.name;
                brewCity.innerText = document.getElementById("result1").innerText + '\n' + brew.city;
                // brewCountry.innerText = document.getElementById("result2").innerText + '\n' + brew.country;
                // brewSite.innerText = document.getElementById("result3").innerText + '\n' + brew.website_url;

            }


        } else if (this.status == 404) {
            console.log("Not found!");
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};