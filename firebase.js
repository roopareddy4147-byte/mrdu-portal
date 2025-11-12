const firebaseConfig = {
  apiKey: "AIzaSyBkHuILoaA6OVREaGriwvllGcSIDjFDCVc",
  authDomain: "mrdu-portal.firebaseapp.com",
  projectId: "mrdu-portal",
  storageBucket: "mrdu-portal.firebasestorage.app",
  messagingSenderId: "473985457287",
  appId: "1:473985457287:web:081cbf3a4dae905d1a6c22",
  measurementId: "G-JJS4PNGRXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);