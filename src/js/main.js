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

    console.log(data);
  });
})();
