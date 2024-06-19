document.getElementById("yesButton").addEventListener("click", function() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUYbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAg";  // Substitua com a URL desejada
});

const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", function() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const newLeft = Math.random() * (containerRect.width - buttonRect.width);
  const newTop = Math.random() * (containerRect.height - buttonRect.height);

  noButton.style.left = `${newLeft}px`;
  noButton.style.top = `${newTop}px`;
});
