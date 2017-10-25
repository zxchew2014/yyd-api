import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

export const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  authDomain: process.env.REACT_API_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_API_FIREBASE_DATABASE_URL
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
export const db = admin.database();
export const ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

export default admin;
