function drop() {
    document.getElementById("dropdown-content").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function drp_select(x){
    if(x == 1){
        document.getElementsByClassName('dropdown-btn')[0].innerHTML = x + " person";
    }else{
        document.getElementsByClassName('dropdown-btn')[0].innerHTML = x + " people";
    }
}