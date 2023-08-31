document.addEventListener("DOMContentLoaded", function() {
    // Select the offcanvas menu element
    var offcanvasMenu = document.getElementById("offcanvasMenu");
    // Select the menu toggle button
    var menuToggle = document.getElementById("menuToggle");
    // Add an event listener to toggle or close the offcanvas menu when the button is clicked
    menuToggle.addEventListener("click", function() {
      offcanvasMenu.classList.toggle("open");
      menuToggle.classList.toggle("open");
      if (offcanvasMenu.classList.contains("open")) {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    $('.sub-menu ul').hide();
    $(".sub-menu a").click(function(){
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  }); 
});


