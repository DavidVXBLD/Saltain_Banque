let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            console.log("200, file has been found")
            


            
        } else {
            console.log("Une erreur est survenue");
        }
    } else {
        console.log("chargement en cours");
    }
}

httpRequest.open("GET", "json/statistiques.json");
httpRequest.overrideMimeType("text/plain");
httpRequest.send();

