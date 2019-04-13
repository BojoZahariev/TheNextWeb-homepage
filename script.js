window.onresize = function() {
    toggle();
  };
  
  window.onscroll = function() {
    myFunction();
  };
  
  var nav = document.getElementById("navid");
  var sticky = nav.offsetTop;
  var logo = document.getElementById("logo2id");
  var biglogo = document.getElementById("logoid");
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      biglogo.style.display = "none";
      logo.style.display = "block";
    } else if (window.pageYOffset < sticky && window.innerWidth > 1024) {
      biglogo.style.display = "none";
      logo.style.display = "none";
  
    } else if (window.pageYOffset < sticky && window.innerWidth < 1024) {
      logo.style.display = "none";
      biglogo.style.display = "block";
    }
  }
  
  function toggle() {
    if (window.innerWidth > 1024) {
      biglogo.style.display = "none";
      logo.style.display = "none";
    } else if (window.innerWidth < 1024) {
      logo.style.display = "none";
      biglogo.style.display = "block";
    }
  }
