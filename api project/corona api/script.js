// Load global data when page loads
window.onload = function () {
    fetchGlobalData();
};

// Fetch worldwide COVID data
function fetchGlobalData() {
    fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
        .then(data => {
            document.getElementById("country").innerText = "Worldwide";
            updateUI(data);
        })
        .catch(error => {
            alert("Error fetching data");
            console.log(error);
        });
}

// Fetch country-wise data
function getCovidData() {
    const country = document.getElementById("countryInput").value;

    if (country === "") {
        alert("Please enter a country name");
        return;
    }

    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Country not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("country").innerText = data.country;
            updateUI(data);
        })
        .catch(error => {
            alert("Country not found");
            console.log(error);
        });
}

// Update UI values
function updateUI(data) {
    document.getElementById("cases").innerText = data.cases;
    document.getElementById("recovered").innerText = data.recovered;
    document.getElementById("deaths").innerText = data.deaths;
    document.getElementById("active").innerText = data.active;
}
