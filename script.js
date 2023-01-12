var beige = document.getElementById("beige");
var yellowSwatch = document.getElementById("yellow");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var image = document.getElementById("product-photo");
var price = document.getElementById("price");

yellowSwatch.addEventListener("mouseover", function() {
  console.log("Yellow");
  document.getElementById("yellow").className += " selected";
  image.src = "img/chair-yellow@2x.jpg";
  price.innerHTML = "$74.99";
  price.style.color = "green";
  price.innerHTML += " (Sale)";
});


yellowSwatch.addEventListener("mouseleave", function() {
  image.src = "img/chair-beige@2x.jpg";
  document.getElementById("yellow").classList.remove('selected');
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
})

blueSwatch.addEventListener("mouseover", function() {
  image.src = "img/chair-blue@2x.jpg";
  document.getElementById("blue").className += " selected";
  price.innerHTML = "$89.99";
  price.style.color = "black";
});

blueSwatch.addEventListener("mouseleave", function() {
  image.src = "img/chair-beige@2x.jpg";
  document.getElementById("blue").classList.remove('selected');
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
})



redSwatch.addEventListener("mouseover", function() {
  image.src = "img/chair-red@2x.jpg";
  document.getElementById("red").className += " selected";
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});


redSwatch.addEventListener("mouseleave", function() {
  image.src = "img/chair-beige@2x.jpg";
  document.getElementById("red").classList.remove('selected');
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
})

beige.addEventListener("mouseover", function() {
  image.src = "img/chair-beige@2x.jpg";
  document.getElementById("beige").className += " selected";
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});

beige.addEventListener("mouseleave", function() {
  image.src = "img/chair-beige@2x.jpg";
  document.getElementById("beige").classList.remove('selected');
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});