const form = document.querySelector("form");
const generateBtn = document.querySelector("#generate-btn");
const qrCodeDiv = document.querySelector("#qr-code");
const sizeInput = document.querySelector("#size-input");

sizeInput.value = 300;

generateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const urlInput = document.querySelector("#url-input").value;
  const size = sizeInput.value;
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?data=${urlInput}&size=${size}x${size}`;
  qrCodeDiv.innerHTML = "";
  const loader = document.createElement("div");
  loader.classList.add("loader");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  loader.appendChild(spinner);
  qrCodeDiv.appendChild(loader);
  setTimeout(() => {
    loader.style.display = "none";
    const img = document.createElement("img");
    img.src = qrCode;
    qrCodeDiv.appendChild(img);
  }, 2000);
});
