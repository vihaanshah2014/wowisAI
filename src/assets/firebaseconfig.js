import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBx4TTN924wfPBDmo2EuD0fXpmwD6EwagU",
    authDomain: "makewowis.firebaseapp.com",
    projectId: "makewowis",
    storageBucket: "makewowis.appspot.com",
    messagingSenderId: "490888137281",
    appId: "1:490888137281:web:13f7d4d22c9532d1f054c0",
    measurementId: "G-H1TTCVV12D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
