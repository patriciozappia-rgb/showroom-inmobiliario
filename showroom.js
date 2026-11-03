
function irAEdificio() {
  document.getElementById("edificio")
    .scrollIntoView({ behavior: "smooth" });
}

const departamentos = {
  A: {
    nombre: "Departamento A",
    superficie: "76 m²",
    dormitorios: 2,
    baños: 2,
    estado: "Disponible"
  },

  B: {
    nombre: "Departamento B",
    superficie: "52 m²",
    dormitorios: 1,
    baños: 1,
    estado: "Disponible"
  },

  C: {
    nombre: "Departamento C",
    superficie: "98 m²",
    dormitorios: 3,
    baños: 2,
    estado: "Consultar"
  }
};

function seleccionar(id) {

  const d = departamentos[id];

  document.getElementById("informacion").innerHTML = `
    <h3>${d.nombre}</h3>
    <p>Superficie: ${d.superficie}</p>
    <p>Dormitorios: ${d.dormitorios}</p>
    <p>Baños: ${d.baños}</p>
    <p>Estado: ${d.estado}</p>
  `;

}
