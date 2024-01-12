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
              <span> ${ore.value}</span>
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
function renderItems(items={}, container) {
  container.innerHTML = '';
  Object.keys(items).map((keyore) => {
    let item = items[keyore];
    let itemrendered = renderItem(item);
    container.innerHTML += itemrendered;
  });
}

function renderItem(item){
  let inventoryRender = `
  <div class="col col-12 col-md-6 py-2 inventoryItem-${item}">
      <div class="col col-12 col-md-6 col-lg-6 d-flex gap-1 py-2 monserrat">
      <p class="mb-0"> ${item.name}</p>
        <button type="button" class="btn btn-sm btn-outline-primary inventory-btnUse" data-inventoryId="${item}">
            Use
        </button>
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

export { getItemsInGame, renderOres, initializeBtnInventory, renderItems };
