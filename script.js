const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "yellow", "orange"]; // 4 renk oluşturduk.
const btn = document.getElementById("btn"); // btn id li butonu aldık.
const color = document.querySelector(".color"); // color class lı span i aldık.

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber(); // Rastgele üretilen sayıyı aldık
  //console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber]; // Arka plan rengini colors dizisinden bir renk ile değiştirdik.
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length); // Rastgele bir sayı ürettik. Colors dizisinin uzunluğu kadar
}

