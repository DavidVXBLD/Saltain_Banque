document.querySelector("#infosButton").addEventListener("click", function() {
    document.querySelector("#layer").remove();
    document.querySelector("#infosBlock").remove();
})

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        console.log("Response arrive")
        if (httpRequest.status === 200) {
            let response = JSON.parse(httpRequest.response);
            console.log(response);
            document.querySelector("#infosTitle").innerText = response.title;
            document.querySelector("#infosText").innerText = response.text;
        }
    } else {
        document.querySelector("#infosTitle").innerText = "Erreur";
        document.querySelector("#infosText").innerText = "Erreur";
    }
}
httpRequest.open("GET", "json/informations.json");
httpRequest.send();