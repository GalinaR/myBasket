import { ref, uploadBytes, uploadString } from "firebase/storage";
import { format } from "date-fns";

import { storage } from "./firebase";

const BUCKET_URL = "gs://mybasket-db076.appspot.com";

// Uploads image and returns the storage bucket
export async function uploadImage(image, uid) {
  const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
  console.log("uploadImage");
  await uploadBytes(ref(storage, bucket), image);
  // const message = "This is my message.";
  // console.log("uploadImage", storage, bucket, image);
  // uploadString(ref(storage, bucket), message, image).then((snapshot) => {
  //   console.log("Uploaded a raw string!");
  // });
  return bucket;
}
