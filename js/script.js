$(document).ready(function() {
  console.log('hello');
  var url = "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg"
  $.ajax({
    url: url,
    method: "GET",
    success: function (data, stato) {
    $("#risultati").html(data);
    },
    error: function (richiesta, stato, errori) {
    alert("E' avvenuto un errore. " + errore);
    }
  });

});
