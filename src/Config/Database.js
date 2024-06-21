import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDBCsvblGjQxCC552fJcDs_FPnTg9JaaBs",
  authDomain: "contoh-763ee.firebaseapp.com",
  databaseURL: "https://contoh-763ee-default-rtdb.firebaseio.com",
  projectId: "contoh-763ee",
  storageBucket: "contoh-763ee.appspot.com",
  messagingSenderId: "880059056129",
  appId: "1:880059056129:web:1da62165bc84e2c6668000",
  measurementId: "G-K2W17TDMK6",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
