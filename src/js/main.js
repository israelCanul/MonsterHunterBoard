// Import our custom CSS
import '../scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import {
  getItemsInGame,
  renderOres,
  renderItems,
  initializeBtnInventory,
} from './helpers';
import { setDataToFirebase } from './firebase';

(function () {
  'use strict';
  let oresWrapper = document.querySelector('.oresWrapper');
  let btnAddOre = document.querySelector('#addOre');
  let btnModal1 = document.getElementById('saveChangesBtn1');
  let btnModal2 = document.getElementById('saveChangesBtn2');
  let itemsInventoryWrapper = document.getElementById('listItemsInventory');
  let url = 'items/ores';

  btnAddOre.addEventListener('click', () => {
    setDataToFirebase(url, { label: 'asdasd', value: 'ggfgf' });
  });

  getItemsInGame((data, err) => {
    if (err) alert('error getting items');
    if (data) {
      console.log(data);
      renderOres(data.ores, oresWrapper);
      renderItems(data.inventory, itemsInventoryWrapper )
    }
  });
  if (btnModal1) {
    btnModal1.addEventListener('click', ()=>saveChanges('ores'));
  }
  if (btnModal2) {
    btnModal2.addEventListener('click', ()=>saveChanges('inventory'));
  }



  function saveChanges(path) {
    var form = document.getElementById('myForm');
    var form2 = document.getElementById('myForm2');
    var modal = document.getElementById('closeModalMonster');
    var showErrors = document.getElementById("errorsModal");
    var showErrors2 = document.getElementById("errorsModal2");
    switch (path) {
      case 'ores':
        if (form.checkValidity()) {
          var itemName = document.getElementById('itemName').value;
          var itemCantity = document.getElementById('itemValue').value;
          setDataToFirebase(`items/${path}`, { label: itemName, value: itemCantity });
          modal.click()
          form.reset();
        } else {
          showErrors.classList.add("text-center")
          showErrors.classList.add("text-danger")
          showErrors.innerHTML = "faltan campos huevon"
          console.log('El formulario no es válido');
        }
        break;
      case 'inventory':
        if (form2.checkValidity()) {
          var itemName = document.getElementById('itemName2').value;
          setDataToFirebase(`items/${path}`, { name: itemName,});
          modal.click()
          form2.reset();
        } else {
          showErrors2.classList.add("text-center")
          showErrors2.classList.add("text-danger")
          showErrors2.innerHTML = "faltan campos huevon"
          console.log('El formulario no es válido');
        }
        break;
    
      default:
        console.log('Error seleccion');
        break;
    }
    
  }
})();
