const buttonTheme = document.getElementById("buttontheme");
var myTheme = true;
function changeTheme() {
  console.log("Função changeTheme foi chamada!");
  if (myTheme) {
    document.documentElement.style.setProperty("--backColor", "#383d45");
    document.documentElement.style.setProperty("--sideColor", "#121212");
    document.documentElement.style.setProperty("--textColor", "#ffffff");
    document.documentElement.style.setProperty("--primaryColor", "#5d3fd3");
    document.documentElement.style.setProperty("--secundaryColor", "#3cb371");
  } else {
    document.documentElement.style.setProperty("--backColor", "#eeeeee");
    document.documentElement.style.setProperty("--sideColor", "#c2c2c2");
    document.documentElement.style.setProperty("--textColor", "#1c1c1c");
    document.documentElement.style.setProperty("--primaryColor", "#1e3a8a");
    document.documentElement.style.setProperty("--secundaryColor", "#ffd700");
  }
  myTheme = !myTheme;
}
buttonTheme.addEventListener("click", changeTheme);
