// Import our custom CSS
import '../scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import { getItemsInGame, renderOres } from './helpers';

(function () {
  'use strict';
  let oresWrapper = document.querySelector('.oresWrapper');

  getItemsInGame((data, err) => {
    if (err) alert('error getting items');
    if (data) {
      renderOres(data.ores, oresWrapper);
    }
  });
})();
function handleButtonClickInventory() {
var divAddInventory = document.createElement("div");
divAddInventory.classList.add("d-flex")
divAddInventory.classList.add("column-gap-3")
var buttonAddInventory = document.createElement("input");
buttonAddInventory.type = "button"
buttonAddInventory.value = "Agregar"
buttonAddInventory.classList.add("btn")
buttonAddInventory.classList.add("btn-outline-primary")
var inputToAddInventory = document.createElement("input");
inputToAddInventory.type = "text"
inputToAddInventory.classList.add("form-control")
inputToAddInventory.id = "itemInvetory"
var itemsInventoryContainer = document.getElementById("listItemsInventory");

divAddInventory.appendChild(inputToAddInventory)
divAddInventory.appendChild(buttonAddInventory)

itemsInventoryContainer.appendChild(divAddInventory);
inputToAddInventory.focus();
}
  var addInventory = document.getElementById("addItem")
  if (addInventory) {
    addInventory.addEventListener("click", handleButtonClickInventory);
  }