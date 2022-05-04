var search = document.getElementById("search");
search.addEventListener('keyup', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode == 13) {
    window.open("/assets/html/error404.html");
  }
});