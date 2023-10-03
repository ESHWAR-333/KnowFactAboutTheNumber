let userInput = document.getElementById("userInput");
let fact = document.getElementById("fact");

function append(data) {
    fact.textContent = (data.fact);
}

function fun(event) {
    // console.log(event.key);
    if (event.key === "Enter") {
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput.value;
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                append(data);
            });
    }
}
userInput.addEventListener("keydown", fun);