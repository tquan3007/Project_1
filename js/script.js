/*Name this external file gallery.js*/

function upDate(previewPic) {
  let mainI = document.getElementById("image");
  mainI.style.backgroundImage = "url('" + previewPic.src + "')";

  mainI.innerHTML = previewPic.alt;
}

function unDo() {
  let mainI = document.getElementById("image");
  mainI.style.backgroundImage = "url('" + "')";
  mainI.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
  console.log("Tab focus active");
  let previewImg = document.getElementsByClassName("preview");
  for (let x = 0; x < previewImg.length; x++) {
    previewImg[x].tabIndex = 0;
  }
  console.log("The TabIndex has been add to" + previewImg.length + "Images");
}
