var modal = document.getElementById("cmp-menu_myModal");
var btn = document.getElementById("cmp-menu_myBtn");
var span = document.getElementsByClassName("cmp-menu_close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modals = document.getElementById("cmp-notification_modal");
var btnnotification = document.getElementById("cmp-notification");
var spannotification = document.getElementsByClassName("cmp-notification_close")[0];

btnnotification.onclick = function() {
  modals.style.display = "block";
}

spannotification.onclick = function() {
  modals.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none";
  }
}

