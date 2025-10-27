function mostrarSolucion(num) {
    const solucion = document.getElementById("solucion" + num);
    if (solucion.style.display === "none" || solucion.style.display === "") {
        solucion.style.display = "block";
    } else {
        solucion.style.display = "none";
    }
}