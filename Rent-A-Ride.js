var menuButton = document.getElementById("menu");
menuButton.addEventListener("click", expandMenu);

function expandMenu() {
  console.log("here")
  document.getElementById("drop-down-menu").style.display = "inherit";
}
