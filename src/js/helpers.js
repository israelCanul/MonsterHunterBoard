import { getObject } from './firebase';
function getItemsInGame(callback = () => {}) {
  getObject('items', (dt, err) => callback(dt, err));
}

function renderOres(ores = [], container) {
  container.innerHTML = '';
  Object.keys(ores).map((keyore) => {
    let ore = ores[keyore];
    let orerendered = renderOre(ore);
    container.innerHTML += orerendered;
  });
}
function renderOre(ore = {}) {
  let oreRender = `
        <div class="col col-12 col-md-6 py-2">
          <div class="row bg-white">
            <div class="col col-12 col-md-6 col-lg-5 monserrat">
              ${ore.label}:
            </div>
            <div
              class="col col-12 col-md-6 col-lg-7 d-flex flex-row justify-content-between"
            >
              <span>1</span>
              <div class="actions d-flex flex-row gap-1">
                <button type="button" class="btn btn-sm btn-outline-primary" data-oreCode="${ore.value}">
                  add +
                </button>
                <button type="button" class="btn btn-sm btn-outline-primary" data-oreCode="${ore.value}">
                  Use
                </button>
              </div>
            </div>
          </div>
        </div>  
  `;
  return oreRender;
}

function renderInventory(timeStamp = '00ss') {
  let inventoryRender = `
  <div class="col col-12 col-md-6 py-2 inventoryItem-${timeStamp}">
    <div class="row bg-white">
      <div class="col col-12 col-md-6 col-lg-5 monserrat">
        <input type="text" class="form-control " id="inventory-inputName-${timeStamp}">
      </div>
      <div
        class="col col-12 col-md-6 col-lg-7 d-flex flex-row justify-content-between"
      >
        <span class="d-flex align-items-center justofy-content-center" id="inventory-countdata-${timeStamp}">1</span>
        <div class="actions d-flex flex-row gap-1 py-2">
          <button type="button" class="btn btn-sm btn-outline-primary inventory-btnAddMore" data-inventoryId="${timeStamp}">
            add +
          </button>
          <button type="button" class="btn btn-sm btn-outline-primary inventory-btnUse" data-inventoryId="${timeStamp}">
            Use
          </button>
        </div>
      </div>
    </div>
  </div>  
  `;
  return inventoryRender;
}

function initializeBtnInventory(timeStamp = '00ss') {
  let btnIncrement = document.querySelectorAll('.inventory-btnAddMore');
  let btnUse = document.querySelectorAll('.inventory-btnUse');
  btnIncrement.forEach((btn) => {
    let dataInventory = btn.dataset.inventoryid;
    btn.addEventListener('click', () => {
      let spanValue = document.querySelector(
        `#inventory-countdata-${dataInventory}`
      );
      let spanCount = parseInt(spanValue.textContent);
      spanCount++;
      spanValue.innerText = spanCount;
    });
  });
  btnUse.forEach((btn) => {
    let dataInventory = btn.dataset.inventoryid;
    btn.addEventListener('click', () => {
      let spanValue = document.querySelector(
        `#inventory-countdata-${dataInventory}`
      );
      let spanCount = parseInt(spanValue.textContent);
      spanCount--;
      spanValue.innerText = spanCount < 0 ? 0 : spanCount;
    });
  });
}

export { getItemsInGame, renderOres, renderInventory, initializeBtnInventory };
