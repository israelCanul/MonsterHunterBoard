import { app } from './database';
import {
  push,
  getDatabase,
  get,
  orderByChild,
  ref,
  query,
  equalTo,
  set,
  remove,
} from 'firebase/database';

function getObject(item, callback = () => {}) {
  const database = getDatabase(app);
  get(query(ref(database, item)))
    .then((data) => {
      callback(data.val(), null);
    })
    .catch((err) => {
      console.log(err);
      callback(null, err);
    });
}

export { getObject };
