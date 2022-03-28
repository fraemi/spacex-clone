function openMenu() {
    document.getElementById("side-menu-id").style.width = "350px";
}
  
function closeMenu() {
    document.getElementById("side-menu-id").style.width = "0";
}

window.onscroll = function() {
    document.getElementById("side-menu-id").style.width = "0"
};