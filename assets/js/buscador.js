var search = document.getElementById("search");
search.addEventListener('keyup', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode == 13) {
    window.open("/assets/html/error404.html");
  }
});

// funciona para abrir nueva pagina si el usuario presiona enter en el cuadro de texto del buscador, borrar una vez creado la funcion de buscar prouductos.
