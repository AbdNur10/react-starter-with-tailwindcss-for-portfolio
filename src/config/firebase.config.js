import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyClgeM0NkoqBlk2K6H1zu66wgPEvSJT5ww",
  authDomain: "react-portfolio-4c183.firebaseapp.com",
  projectId: "react-portfolio-4c183",
  storageBucket: "react-portfolio-4c183.appspot.com",
  messagingSenderId: "268751165252",
  appId: "1:268751165252:web:3ebf7c28b370b56694e911"
};

const app=getApps.length>0? getApp():initializeApp(firebaseConfig);
const db=getFirestore(app);
export {app,db}