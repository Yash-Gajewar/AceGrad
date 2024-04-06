import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAf7ZPcRNPMP3dMcNi-kAkXlrtptusKY44",
  authDomain: "acegrad.firebaseapp.com",
  projectId: "acegrad",
  storageBucket: "acegrad.appspot.com",
  messagingSenderId: "663224764511",
  appId: "1:663224764511:web:9c083eaba7aa936ff473ea"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);