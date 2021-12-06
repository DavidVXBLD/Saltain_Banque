<?php 
    include "template/header.php"; 
    include "template/nav.php";
    ?>


<main class="container">
    <h2>L'économie en bref</h2>
    <table class="table table-striped mt-3">
      <thead class="bg-info text-white">
        <tr>
          <th scope="col">Indicateur</th>
          <th scope="col">Valeur</th>
          <th scope="col">Variation</th>
        </tr>
      </thead>
      <tbody id="statTable">
      </tbody>
    </table>


  </main> 


<?php 
    include "template/footer.php"; 
    ?>