const atom = document.querySelector(".atom");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    atom.style.left = `${x}px`;
    atom.style.top = `${y}px`;
});
