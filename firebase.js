import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
const firebaseConfig = {
    apiKey: 'AIzaSyDUkVrBOAiVEHWUmnZuHN4KP35plq-rX9k',
    authDomain: 'recipeapp2204.firebaseapp.com',
    projectId: 'recipeapp2204',
    storageBucket: 'recipeapp2204.appspot.com',
    messagingSenderId: '420167387730',
    appId: '1:420167387730:web:fba6cf706954251ee46d8b',
    measurementId: 'G-Z7LM9N2332'
}
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();


const getUrlByName = (fileName) => {
    getDownloadURL(ref(storage, '1.png'))
        .then(url => {
            // `url` is the download URL for 'images/stars.jpg'

            // This can be downloaded directly:
            const xhr = new XMLHttpRequest()
            xhr.responseType = 'blob'
            xhr.onload = event => {
                const blob = xhr.response
            }
            xhr.open('GET', url)
            xhr.send()
            alert(url)
        })
        .catch(error => {
            alert(error)
        })
}

const appSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user
            alert(user.email)

            // ...
        })
        .catch(error => {
            const errorCode = error.code
            const errorMessage = error.message
            alert(error.message)
        })
}

const uploadImageToFireBase = (uri) => {
    return new Promise((res, rej) => {
        console.log(uri)
        const filename = uri.substring(uri.lastIndexOf('/') + 1).substring(0, 17)
        const storageRef = ref(storage, filename);
        // console.log(response)
        fetch(uri)
            .then(response => {
                response.blob()
                    .then(blob => {
                        uploadBytes(storageRef, blob)
                            .then((snapshot) => {
                                // console.log(snapshot)
                                res(snapshot)
                                if (snapshot == null) {
                                    rej("No snapshot")
                                }
                            }).catch((e) => { alert(e) })
                    }).catch(e => { alert(e) })
            }).catch(e => { alert(e) })
    })
}

export { getUrlByName }
export { appSignUp }
export { uploadImageToFireBase }