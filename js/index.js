const profileShareIcon = document.getElementById("icon-share-profile");
const wrapperShareIcon = document.getElementById("icon-share-wrapper");
const shareWrapper = document.getElementById("share-wrapper");

console.log(profileShareIcon);
console.log(shareWrapper);
console.log(wrapperShareIcon);

profileShareIcon.addEventListener("click", function (e) {
  profileShareIcon.classList.toggle("active");
  shareWrapper.style.display == "block" ? (shareWrapper.style.display = "none") : (shareWrapper.style.display = "block");
});

wrapperShareIcon.addEventListener("click", function (e) {
  profileShareIcon.classList.toggle("active");
  shareWrapper.style.display == "block" ? (shareWrapper.style.display = "none") : (shareWrapper.style.display = "block");
});
