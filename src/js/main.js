// Import our custom CSS
import '../scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import {
  getItemsInGame,
  renderOres,
  renderInventory,
  initializeBtnInventory,
} from './helpers';

(function () {
  'use strict';
  let oresWrapper = document.querySelector('.oresWrapper');
  var addInventory = document.getElementById('addItem');

  getItemsInGame((data, err) => {
    if (err) alert('error getting items');
    if (data) {
      renderOres(data.ores, oresWrapper);
    }
  });

  function handleButtonClickInventory() {
    var itemsInventoryContainer = document.getElementById('listItemsInventory');
    let timeStamp = new Date().getTime();
    let newInventory = renderInventory(timeStamp);
    itemsInventoryContainer.innerHTML += newInventory;
    initializeBtnInventory(timeStamp);
    document.querySelector(`#inventory-inputName-${timeStamp}`).focus();
  }

  //
  if (addInventory) {
    addInventory.addEventListener('click', handleButtonClickInventory);
  }
})();
