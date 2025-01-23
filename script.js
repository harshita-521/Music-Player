function BgChange() { const div = document.getElementsByClassName("player");

  setInterval(() => {
    const randomColor = `rgb(Math.random() *155,Math.random() *155,Math.random() *155)`;
    div.style.backgroundColor = randomColor;
  }, 1000); }

  BgChange();