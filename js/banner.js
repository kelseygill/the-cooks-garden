function nextimg() {
console.log(bannerimages[currentactive])
  var activeelement = document.querySelector(".banner-img.active")
  removeClass("active", activeelement)
  addClass("active", bannerimages[currentactive])
  if (currentactive == bannerimages.length-1) {
    currentactive = 0
  } else {
    currentactive = currentactive + 1
  }

}
var bannerimages = document.querySelectorAll(".banner-img")
console.log(bannerimages)
var currentactive = 0
  nextimg()
setInterval(function() {
  nextimg()
}, 5000)

function addClass(className, element) {
  element.className = element.className + " " + className

}

function removeClass(className, element) {
  element.className = element.className.replace(className, " ")

}
function hasClass(className, element){
  return element.className.indexOf(className) >=0
}
var headerToggle = document.querySelector(".header-toggle")
headerToggle.addEventListener("click", function(){
  var htmlelement=document.querySelector("html")
  if (hasClass ("navopen", htmlelement)) {
    removeClass("navopen", htmlelement)
  } else {
    addClass ("navopen", htmlelement)
  }

})
