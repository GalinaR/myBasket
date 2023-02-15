import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
// import { getDownloadURL } from "./storage";

const PRODUCTS_COLLECTION = "products";

export async function addProduct(uid, title, price, store, imgURL) {
  console.log("addProduct", uid, title, price, store, imgURL);
  await addDoc(collection(db, PRODUCTS_COLLECTION), {
    uid,
    title,
    price,
    store,
    imgURL,
  });
}

const STORES_COLLECTION = "stores";

export async function addStore(uid, store_name) {
  console.log("addStore", uid, store_name);
  await addDoc(collection(db, STORES_COLLECTION), {
    uid,
    store_name,
  });
}

export async function getStores(uid, setStores) {
  const receiptsQuery = query(
    collection(db, STORES_COLLECTION),
    where("uid", "==", uid),
    orderBy("store_name", "asc")
  );
  console.log("receiptsQuery", receiptsQuery);

  const unsubscribe = onSnapshot(receiptsQuery, async (snapshot) => {
    let allStores = [];
    for (const documentSnapshot of snapshot.docs) {
      const store = documentSnapshot.data();
      allStores.push({
        ...store,
        value: store["store_name"],
        key: documentSnapshot.id,
      });
    }
    console.log("setStores", allStores);
    setStores(allStores);
  });
  return unsubscribe;
}
