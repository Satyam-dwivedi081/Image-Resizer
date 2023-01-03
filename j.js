const t = document.getElementById("final");
const ctx = t.getContext("2d");

function loadImage(event) {
  const img = document.getElementById("Display");
  img.src = URL.createObjectURL(event.target.files[0]);
}

const view = document.getElementById("view");
view.addEventListener("click", vi);

function vi() {
  const img = document.getElementById("Display");

  const imWidth = document.getElementById("imWidth").value;
  const imHeight = document.getElementById("imHeight").value;

  t.width = imWidth;
  t.height = imHeight;

  ctx.drawImage(img, 0, 0, imWidth, imHeight);

  form = document.querySelector("form");
  form.reset();
}


