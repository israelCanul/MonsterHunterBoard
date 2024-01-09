import { getObject } from './firebase';
function getItemsInGame(callback = () => {}) {
  getObject('items', (dt, err) => callback(dt, err));
}

function renderOres(ores = [], container) {
  container.innerHTML = '';
  ores.map((ore) => {
    let orerendered = renderOre(ore);
    container.innerHTML += orerendered;
  });
}
function renderOre(ore = {}) {
  let oreRender = `
        <div class="col col-12 col-md-6 py-2">
          <div class="row bg-white">
            <div class="col col-12 col-md-4 col-lg-3 monserrat">
              ${ore}:
            </div>
            <div
              class="col col-12 col-md-8 col-lg-9 d-flex flex-row justify-content-between"
            >
              <span>1</span>
              <div class="actions d-flex flex-row gap-1">
                <button type="button" class="btn btn-sm btn-outline-primary">
                  add +
                </button>
                <button type="button" class="btn btn-sm btn-outline-primary">
                  Use
                </button>
              </div>
            </div>
          </div>
        </div>  
  `;
  return oreRender;
}

export { getItemsInGame, renderOres };
