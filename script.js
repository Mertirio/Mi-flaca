document.getElementById("btnSi").addEventListener("click", function() {
    document.getElementById("mensaje").textContent = "¡Te amo hoy, mañana y siempre! ❤️";
});

document.getElementById("btnNo").addEventListener("mouseover", function() {
    let botonNo = document.getElementById("btnNo");
    let x = Math.random() * (window.innerWidth - botonNo.offsetWidth);
    let y = Math.random() * (window.innerHeight - botonNo.offsetHeight);
    botonNo.style.position = "absolute";
    botonNo.style.left = `${x}px`;
    botonNo.style.top = `${y}px`;
});