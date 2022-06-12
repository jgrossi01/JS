let xDiaEtios = 2000;
let xDiaCorolla = 3000;
let xDiaHilux = 4000;

let continuar = true;
let total = 0;
let msj = "";

do {
  let modelo = prompt(`Bienvenido! Que vehiculo precisa?\nEtios\nCorolla\nHilux`).toLowerCase();
  let cantidad = Number(prompt(`Cuantos ${modelo} precisa rentar?`));
  let dias = Number(prompt(`Por cuantos días precisa los ${cantidad} ${modelo}?`));
  let totalParcial = 0;

  switch (modelo) {
    case "etios":
      totalParcial = xDiaEtios * cantidad * dias;
      total += totalParcial;
      msj += `<p>${cantidad} Etios por ${dias} días, por un total de $${totalParcial}</p><br/>`;
      break;
    case "corolla":
      totalParcial = xDiaCorolla * cantidad * dias;
      total += totalParcial;
      msj += `<p>${cantidad} Corolla por ${dias} días, por un total de $${totalParcial}</p><br/>`;
      break;
    case "hilux":
      totalParcial = xDiaHilux * cantidad * dias;
      total += totalParcial;

      msj += `<p>${cantidad} Hilux por ${dias} días, por un total de $${totalParcial}</p><br/>`;
      break;
    default:
      alert(`No encontramos el modelo solicitado`);
  }
  continuar = confirm("¿Queres agregar otro modelo?");
} while (continuar);

if (total > 0) {
  msj += `<p>Por un total final de: $${total}</p></br>`;
}

console.log(`Usted rentó correctamente: ${msj}`);
document.getElementById("resultado").innerHTML += msj;
