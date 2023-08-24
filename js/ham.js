var checkbox = document.querySelector("input[name=checkbox]");
const menu = document.getElementById('navmenu');
const anchors = menu.getElementsByTagName('a');
menu.style.display = "flex";
menu.style.opacity = "0";

checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkbox.classList.add('sb-hidden');
      console.log("Checkbox is checked..");
      menu.style.opacity = "1";
      menu.style.zIndex = "90";
      for(var i = 0; i < anchors.length; i++){
        anchors[i].classList.add("anim");
      }
    } else {
      checkbox.classList.remove('sb-hidden');
      console.log("Checkbox is not checked..");
      menu.style.opacity = "0";
      menu.style.zIndex = "-1";
      for(var i = 0; i < anchors.length; i++){
        anchors[i].classList.remove("anim");
      }
    }
  });