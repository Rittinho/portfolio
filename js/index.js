const buttonTheme = document.getElementById("theme-button");
var myTheme = true;
function changeTheme() {
  console.log("Função changeTheme foi chamada!");
  if (myTheme) {
    document.documentElement.style.setProperty("--backColor", "#121212");
    document.documentElement.style.setProperty("--strongColor", "#FF2E63");
    document.documentElement.style.setProperty("--textColor", "#ffffff");
    document.documentElement.style.setProperty("--primaryColor", "#00ADB5");
    document.documentElement.style.setProperty("--secundaryColor", "#FF6347");
    document.documentElement.style.setProperty(
      "--buttonBorderColor",
      "#00ADB5"
    );
  } else {
    document.documentElement.style.setProperty("--backColor", "#eeeeee");
    document.documentElement.style.setProperty("--sideColor", "#c2c2c2");
    document.documentElement.style.setProperty("--textColor", "#1c1c1c");
    document.documentElement.style.setProperty("--primaryColor", "#1e3a8a");
    document.documentElement.style.setProperty("--secundaryColor", "#ffd700");
    document.documentElement.style.setProperty(
      "--buttonBorderColor",
      "#121212"
    );
  }
  myTheme = !myTheme;
}
buttonTheme.addEventListener("click", changeTheme);
