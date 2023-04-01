// const form = document.querySelector("form");
// const generateBtn = document.querySelector("#generate-btn");
// const qrCodeDiv = document.querySelector("#qr-code");
// const sizeInput = document.querySelector("#size-input");
// const downloadBtn = document.querySelector("#download-btn");

// sizeInput.value = 300;

// generateBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const urlInput = document.querySelector("#url-input").value;
//   const size = sizeInput.value;
//   const qrCode = `https://api.qrserver.com/v1/create-qr-code/?data=${urlInput}&size=${size}x${size}`;
//   qrCodeDiv.innerHTML = "";
//   const loader = document.createElement("div");
//   loader.classList.add("loader");
//   const spinner = document.createElement("div");
//   spinner.classList.add("spinner");
//   loader.appendChild(spinner);
//   qrCodeDiv.appendChild(loader);
//   setTimeout(() => {
//     loader.style.display = "none";
//     qrCodeDiv.innerHTML = ""; // Remove any existing images
//     const img = document.createElement("img");
//     img.src = qrCode;
//     img.crossOrigin = "anonymous";
//     qrCodeDiv.appendChild(img);
//     downloadBtn.style.display = "block";
//     downloadBtn.addEventListener("click", () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const context = canvas.getContext("2d");
//       context.drawImage(img, 0, 0, img.width, img.height);
//       const a = document.createElement("a");
//       a.download = "qrcode.png";
//       a.href = canvas.toDataURL("image/png");
//       a.click();
//     });
//   }, 2000);
// });

const form = document.querySelector("form");
const generateBtn = document.querySelector("#generate-btn");
const qrCodeDiv = document.querySelector("#qr-code");
const sizeInput = document.querySelector("#size-input");
const downloadBtn = document.querySelector("#download-btn");

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
  downloadBtn.style.display = "none"; // Hide download button
  setTimeout(() => {
    loader.style.display = "none";
    qrCodeDiv.innerHTML = ""; // Remove any existing images
    const img = document.createElement("img");
    img.src = qrCode;
    img.crossOrigin = "anonymous";
    qrCodeDiv.appendChild(img);
    downloadBtn.style.display = "block";
    downloadBtn.addEventListener("click", () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, img.width, img.height);
      const a = document.createElement("a");
      a.download = "qrcode.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    });
  }, 2000);
});

// Remove download button when a new URL is entered
document.querySelector("#url-input").addEventListener("input", () => {
  downloadBtn.style.display = "none";
});
