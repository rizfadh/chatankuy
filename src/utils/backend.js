import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  orderBy,
  serverTimestamp,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAL47yzy8Y7peWw6QipfIv9V5j-2_mFfEg",
  authDomain: "test-730a6.firebaseapp.com",
  projectId: "test-730a6",
  storageBucket: "test-730a6.appspot.com",
  messagingSenderId: "451780457848",
  appId: "1:451780457848:web:a282dfd64d06eea6e9c48d",
  measurementId: "G-DEDZBEHG7S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'chat');
const makeQuery = query(colRef, orderBy('createdAt', 'asc'));

const addChat = async (name, chat) => {
  try {
    await addDoc(colRef, {
      name: name,
      chat: chat,
      createdAt: serverTimestamp()
    });
  }
  catch (err) {
    alert(err);
  }
}

const deleteChat = async (id) => {
  const docRef = doc(db, 'chat', id);
  try {
    await deleteDoc(docRef);
  }
  catch (err) {
    alert(err);
  }
};

export {
  makeQuery, addChat, deleteChat
};