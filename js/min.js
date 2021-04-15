 document.querySelector(".link").onclick = function () {
    var link = document.getElementById("nav");
  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
  var span = document.getElementById("span");
  if (span.style.width === "100%") {
    span.style.width = "50%";
  } else {
    span.style.width = "100%";
  }
}