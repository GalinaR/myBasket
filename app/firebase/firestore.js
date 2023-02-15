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
