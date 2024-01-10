import { app } from './database';
import {
  push,
  getDatabase,
  get,
  orderByChild,
  ref,
  query,
  equalTo,
  onValue,
  set,
  remove,
} from 'firebase/database';

function getObject(item, callback = () => {}) {
  const database = getDatabase(app);
  const refItems = ref(database, item);
  onValue(refItems, (snapshot) => {
    const data = snapshot.val();
    callback(data, null);
  });

  //old version
  // get(query(ref(database, item)))
  //   .then((data) => {
  //     callback(data.val(), null);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     callback(null, err);
  //   });
}

function setDataToFirebase(referencia, obj) {
  const database = getDatabase(app);
  const postOresRef = ref(database, referencia);
  const newPostRef = push(postOresRef);
  set(newPostRef, obj);
}

export { getObject, setDataToFirebase };
