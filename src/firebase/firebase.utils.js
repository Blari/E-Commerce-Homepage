import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCs5-y0e35RNWGa2rcq2rgfViL1faVEA6I",
    authDomain: "e-comerc.firebaseapp.com",
    databaseURL: "https://e-comerc.firebaseio.com",
    projectId: "e-comerc",
    storageBucket: "e-comerc.appspot.com",
    messagingSenderId: "464139332200",
    appId: "1:464139332200:web:b22d3d90236702a965a9dd",
    measurementId: "G-VXDEQJTKMB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;