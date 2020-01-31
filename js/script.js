$(document).ready(function() {
  console.log('hello');
  var url = "https:flynn.boolean.careers/exercises/api/array/music";
  $.ajax({
    "url": url,
    "method": "GET",
    "success": function (data, stato) {
      dataAlbum(data.response);

    },
    "error": function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
    }
  });

});

// ---------- FUNCTION --------
function dataAlbum(album) {
  for (var i = 0; i < album.length; i++) {
    var cd = album[i];
    console.log(cd);
  }
}
