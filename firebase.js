import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
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


const appSignUp = (email, password) => {
    return new Promise(async(res, rej) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user
                res(user.email)

                // ...
            })
            .catch(error => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(error.message)
            })
    })
}
const appSignIn = (email, password) => {
    return new Promise(async(res, rej) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user
                res(user.email)

                // ...
            })
            .catch(error => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(error.message)
            })
    })
}
const resetPassword = (email) => {
    return new Promise((res, rej) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                res("Succsess")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error.message)
                    // ..
            });
    })
}
const getUrlByName = (fileName) => {
    return new Promise(async(res, rej) => {
        getDownloadURL(ref(storage, fileName))
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
                res(url)
            })
            .catch(error => {
                alert(error)
            })
    })
}

const uploadImageToFireBase = (uri) => {
    return new Promise(async(res, rej) => {
        // console.log(uri)
        const filename = uri.substring(uri.lastIndexOf('/') + 1).substring(0, 17)
        const storageRef = ref(storage, filename);
        // console.log(response)
        let response = await fetch(uri)
        let blob = await response.blob()
        let snapshot = await uploadBytes(storageRef, blob)
            // console.log(snapshot)
        res(snapshot)
    })
}
const deleteImageFromFireBase = (fileName) => {
    return new Promise(async(res, rej) => {
        // Create a reference to the file to delete
        const desertRef = ref(storage, fileName);
        // Delete the file
        deleteObject(desertRef).then(() => {
            res("File deleted successfully")
        }).catch((error) => {
            rej("Uh-oh, an error occurred!")
        });
    })
}

// password:
export { appSignUp }
export { appSignIn }
export { resetPassword }
// image:
export { uploadImageToFireBase }
export { getUrlByName }
export { deleteImageFromFireBase }