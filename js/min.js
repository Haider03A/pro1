 document.querySelector(".link").onclick = function () {
    var link = document.getElementById("nav");
  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
}