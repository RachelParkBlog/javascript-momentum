function changeBackgroundImgs() {
  const bgImages = document.createElement("img");
  bgImages.src = `https://source.unsplash.com/1920x1200?landscape`;
  document.body.appendChild(bgImages);
}

changeBackgroundImgs();
setInterval(changeBackgroundImgs, 70000);
