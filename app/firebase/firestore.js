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
import { getDownloadURL } from "./storage";

const PRODUCTS_COLLECTION = "products";
const STORES_COLLECTION = "stores";

export async function addProduct(uid, title, price, store, imageURL) {
  await addDoc(collection(db, PRODUCTS_COLLECTION), {
    uid,
    title,
    price,
    store,
    imageURL,
  });
}

// Deletes receipt with given @id.
export function deleteProduct(id) {
  deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
}

export async function updateProduct(docId, uid, title, price, store, imageURL) {
  await setDoc(doc(db, PRODUCTS_COLLECTION, docId), {
    uid,
    title,
    price,
    store,
    imageURL,
  });
}

export function getProducts(uid, cbFuncion) {
  const productssQuery = query(
    collection(db, PRODUCTS_COLLECTION),
    where("uid", "==", uid)
    // orderBy("store_name", "asc")
  );

  const unsubscribe = onSnapshot(productssQuery, async (snapshot) => {
    let allProducts = [];
    for (const documentSnapshot of snapshot.docs) {
      const product = documentSnapshot.data();
      console.log("getProducts", product["imageURL"]);
      allProducts.push({
        imageURL: await getDownloadURL(product["imageURL"]),
        // imageURL: await getDownloadURL(
        //   "auth.currentUser?.uid/2023-02-16T02:01:45Z.jpg"
        // ),

        originalImageURL: product.imageURL,
        price: product.price,
        store: product.store,
        title: product.title,
        uid: product.uid,
        id: documentSnapshot.id,
      });
    }
    cbFuncion(allProducts);
  });
  return unsubscribe;
}

export async function addStore(uid, store_name) {
  await addDoc(collection(db, STORES_COLLECTION), {
    uid,
    store_name,
  });
}

export async function getStores(uid, setStores) {
  const storesQuery = query(
    collection(db, STORES_COLLECTION),
    where("uid", "==", uid),
    orderBy("store_name", "asc")
  );

  const unsubscribe = onSnapshot(storesQuery, async (snapshot) => {
    let allStores = [];
    for (const documentSnapshot of snapshot.docs) {
      const store = documentSnapshot.data();
      allStores.push({
        ...store,
        value: store["store_name"],
        key: documentSnapshot.id,
      });
    }
    setStores(allStores);
  });
  return unsubscribe;
}
