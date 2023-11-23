function myFunction() {
    var x = document.getElementById("nav-id");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }