$(document).ready(function(){
  $('.p1 img').hover(function() {
  $(this).animate({
    paddingLeft:'+=15px'
  }, 200);
}, function(){
  $(this).animate({
    paddingLeft:'-=15px'
  }, 200);
  })
})
  function loadRepo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            
            results = JSON.parse(this.responseText);
            for (var i = 0; i < results.length; i++){
                console.log(results[i].name);
                var ul = document.getElementById("repositories");
                var li = document.createElement("LI");
                var a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name));

                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                ul.appendChild(a);
            }
          }
      }
    xhttp.open("GET", "https://api.github.com/users/JessicaGerdes/repos", true)
    xhttp.send();
  }
  