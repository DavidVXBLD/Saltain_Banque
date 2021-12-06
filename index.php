    <?php 
    require "Data/acounts.php";
    include "template/header.php"; 
    include "template/nav.php";
    $accounts = get_accounts();

    ?>

    <!-- ###############################################   LAYER   ###################################################### -->
  <div id="layer" class="text-white bg-dark h-100 w-100 position-fixed"></div>
  <section id="infosBlock" class="container bg-light position-fixed p-0">
    <h2 id="infosTitle" class="col-12 p-2 m-0 bg-danger text-center">chargement.</h2>
    <p id="infosText" class="m-2">chargement.</p>
    <button id="infosButton" class="m-2">J'ai compris</button>
  </section>
  

<section class="d-flex col-12 flex-wrap justify-content-center pt-3 justify-content-md-around pt-md-5">

    <?php
    foreach ($accounts as $account) {
        echo "<ul class=\"account col-3\">";
        foreach ($account as $arg) {
            echo "<li class=\"detailAccount\"> $arg </li>";
        }
        echo "</ul>";
    }
    ?>

</section>
  
  <?php 
    include "template/footer.php"; 
    ?>