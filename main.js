import "./style.css";
import { phoneBook } from "./input";

document.querySelector("#app").innerHTML = /*html*/ `<div>
    <h1>Guía telefónica</h1>
    <input type="text" onkeyup="searchNumber(value)" class="form-control" autofocus placeholder="Introduce el criterio de búsqueda..."/> 
    <h4>Resultado de la búsqueda:</h4>
    <ul class="lista"></ul>
    <footer><a href="">Contacta@</a></footer>
  </div>
`;

document.querySelector(
  ".lista"
).innerHTML = /*html*/ `<h5>Sin resultados...</h5>`;

// Función encargada de buscar coincidencias según el valor introducido en el input.
window.searchNumber = (value) => {
  if (value != "") {
    const phoneBookFilter = phoneBook.filter((element) =>
      element.nombre.toLowerCase().includes(value.toLowerCase())
    );

    const dataPhone = phoneBookFilter.map(
      (element) =>
        `<li>${element.nombre}: <strong>${element.numero}</strong> </li>`
    );
    document.querySelector(".lista").innerHTML = dataPhone.join(" ");
  } else {
    document.querySelector(
      ".lista"
    ).innerHTML = /*html*/ `<h5>Sin resultados...</h5>`;
  }
};
