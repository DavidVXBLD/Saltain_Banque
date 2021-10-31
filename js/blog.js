// instanciation de l'objet pour gérer les requêtes et les réponses
let httpRequest = new XMLHttpRequest();

// Code déclanché quand une réponse arrive du serveur
httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
        let data = JSON.parse(httpRequest.responseText);
        for( let article of data){
            let fetchedData = '<div class="col-sm-4"><div class="card"><div class="card-body"><h5 id="title_1" class="card-title">' + article.id + '</h5><p class="card-text">' + article.contenu + '</p><a href="#" class="btn btn-outline-danger">Go somewhere</a></div></div></div>';
            document.getElementById('blog').innerHTML += fetchedData;
        }
    }
  } else {
    // pas encore prête
    console.log("chargement en cours");
  }
};

// Envoi de la requête au serveur
httpRequest.open('GET', "https://oc-jswebsrv.herokuapp.com/api/articles");
httpRequest.send()