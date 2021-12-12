document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1308) {
      document.querySelector(".pageup").style.display = "block";
    } else {
      document.querySelector(".pageup").style.display = "none";
    }
  });
});
