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
import { setDataToFirebase } from './firebase';

(function () {
  'use strict';
  let oresWrapper = document.querySelector('.oresWrapper');
  var addInventory = document.getElementById('addItem');
  let btnAddOre = document.querySelector('#addOre');
  let btnModal = document.getElementById('saveChangesBtn');
  btnAddOre.addEventListener('click', () => {
    setDataToFirebase('items/ores', { label: 'asdasd', value: 'ggfgf' });
  });

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

  if (addInventory) {
    addInventory.addEventListener('click', handleButtonClickInventory);
  }
  if (btnModal) {
    btnModal.addEventListener('click', saveChanges);
  }



  function saveChanges() {
    var form = document.getElementById('myForm');
    var modal = document.getElementById('closeModalMonster');
    var showErrors = document.getElementById("errorsModal")
    if (form.checkValidity()) {
      var itemName = document.getElementById('itemName').value;
      var itemCantity = document.getElementById('itemValue').value;
      setDataToFirebase('items/ores', { label: itemName, value: itemCantity });
      modal.click()
      form.reset();
    } else {
      showErrors.classList.add("text-center")
      showErrors.classList.add("text-danger")
      showErrors.innerHTML = "faltan campos huevon"
      console.log('El formulario no es válido');
    }
  }
})();
