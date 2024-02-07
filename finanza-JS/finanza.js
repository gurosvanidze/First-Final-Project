const dialog = document.getElementById("explore-more-dialog");
const showButton = document.getElementsByClassName('explore')[0];
const closeButton = document.getElementById("dialog-click");
showButton.addEventListener("click", () => {
  dialog.showModal();
});
closeButton.addEventListener("click", () => {
  dialog.close();
});

let tabItemContents = [
  `\nTempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.Aliqu diam amet diam et eos labore.\n
  We Help Our Clients To Grow Their Business. diam amet diam et eos labore. Clita erat ipsum et lorem et sit.`,
  `\nCustomers will opt-in for updates from companies they want to interact with. So, your message is not getting\n
  lost in the swamp of junk mail and spam, it is being well received by the right person. et lorem et sit.`,
  `\nlost in the swamp of junk tempor and spam, it is being well diam amet by the right person. et lorem et sit,\n
  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos received. Clita erat ipsum et lorem et sit.`
];
function setTabsToDefault() {
  let tabButtons = document.getElementsByClassName("tab-buttons")[0];
  for (let index = 0; index < tabButtons.children.length; index++) {
    const element = tabButtons.children[index];
    element.className = 'tab-button-default';
  }
};

let index = 0;
let images = [
  '../Images/slider-images/slider-image-card.png',
  '../Images/slider-images/slider-image-2.png',
  '../Images/slider-images/slider-image-3.jpg',
];
let background = document.getElementById('main-container');
let leftButton = document.getElementsByClassName('slider-left')[0];
let rightButton = document.getElementsByClassName('slider-right')[0];
leftButton.addEventListener("click", () => {
  if (index > 0) {
    index--;
    setImage();
  }
});
rightButton.addEventListener("click", () => {
  if (images.length - 1 > index) {
    index++;
    setImage();
  }
});
function setImage() {
  background.style.backgroundImage = 'url(' + images[index] + ')';
};

window.onload = function () {
  let tabItemContent = document.getElementsByClassName("tab-item-content")[0];
  let tabButtons = document.getElementsByClassName("tab-buttons")[0];
  tabItemContent.innerText = tabItemContents[0];
  for (let index = 0; index < tabButtons.children.length; index++) {
    let element = tabButtons.children[index];
    element.addEventListener("click", function () {
      tabItemContent.innerText = tabItemContents[index];
      setTabsToDefault();
      tabButtons.children[index].className = 'tab-button-selected';
    });
  }
};