console.log("Welcome to WorkOverflow 2.3")
// document.querySelector("#workoverflow-icon").addEventListener("click", function () {
//     document.querySelector(".settings-content").style.display = "flex"
// });
let menuActive = false;
document.getElementById("add-icon-a").addEventListener("click", () => {
  if (!menuActive) {
    // document.querySelector(".note-color-button").style.display = "flex"
    // document.querySelector(".note-color-button").classList.add("button-is-active")
    // menuItems[0].style.transform = "translate(150px,0)";
    // menuItems[1].style.transform = "translate(150px,90px)";
    // menuItems[2].style.transform = "translate(90px,150px)";
    // menuItems[3].style.transform = "translate(0,150px)";
    menuActive = true;
    document.getElementById("add-icon-a").classList.add("active");
  } else {
    // menuItems.forEach((menuItem) => {
    //   menuItem.style.transform = "translate(0,0)";
    // });
    // document.querySelector(".note-color-button").style.display = "none"
    // document.querySelector(".note-color-button").classList.remove("button-is-active")
    menuActive = false;
    document.getElementById("add-icon-a").classList.remove("active");
  }
});