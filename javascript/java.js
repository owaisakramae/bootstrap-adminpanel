document.addEventListener("DOMContentLoaded", function () {
  // Select the offcanvas menu element
  var offcanvasMenu = document.getElementById("offcanvasMenu");
  // Select the menu toggle button
  var menuToggle = document.getElementById("menuToggle");

  // Add an event listener to toggle or close the offcanvas menu when the button is clicked
  menuToggle.addEventListener("click", function () {
    offcanvasMenu.classList.toggle("open");
    menuToggle.classList.toggle("open");

    var containers = document.querySelectorAll(".containers");

    if (offcanvasMenu.classList.contains("open")) {
      // If the offcanvas menu is open, add 'close-container' class to all '.containers' elements
      containers.forEach(function (container) {
        container.classList.remove("close-container");
      });
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
      // If the offcanvas menu is closed, remove 'close-container' class from all '.containers' elements
      containers.forEach(function (container) {
        container.classList.add("close-container");
      });
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  $(".sub-menu ul").hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
});

$(document).ready(function () {
  $("#myTable").DataTable();
});



$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var inputValue = $(this).val().toLowerCase();
    $("#myTable tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
    });
  });
});