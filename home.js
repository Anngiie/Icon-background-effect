//--------------------------------THEME - DARK MODE----------------------------------------  
function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode"); 
}
function chgIcon(id){
    var icon = document.getElementById("icon");
    icon.classList.toggle("fa-sun-o");
    icon.classList.toggle("fa-moon-o");
  }
//--------------------------------DIV NAV CHANGE ON CLICK----------------------------------------
/*function friends(){
    var div = document.getElementById('friends');
    var div1 = document.getElementById('profile');
    div.classList.toggle(div.style.display="block");
    div1.classList.toggle(div1.style.display="none");  
}
function profile(){
    var div = document.getElementById('friends');
    var div1 = document.getElementById('profile');
    div1.classList.toggle(div1.style.display="block");
    div.classList.toggle(div.style.display="none");  
}
*/