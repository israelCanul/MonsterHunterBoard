// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYGOEb1VP6-NEiPrRvHpf3kGvwJ3d3IZ4',
  authDomain: 'mhbhunterprofile.firebaseapp.com',
  databaseURL: 'https://mhbhunterprofile-default-rtdb.firebaseio.com',
  projectId: 'mhbhunterprofile',
  storageBucket: 'mhbhunterprofile.appspot.com',
  messagingSenderId: '915850030591',
  appId: '1:915850030591:web:83ea173513b471fc424bca',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
