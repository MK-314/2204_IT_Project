import AsyncStorage from '@react-native-async-storage/async-storage';
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

class FireBaseAuthSystem {
    static appSignUp(email, password) {
        return new Promise(async(res, rej) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    // Signed in
                    const user = userCredential.user
                    AsyncStorage.setItem('user', JSON.stringify(user))
                    AsyncStorage.setItem('auth', JSON.stringify(auth))
                    AsyncStorage.setItem('email', JSON.stringify(user.email))
                    res(user.email)
                })
                .catch(error => {
                    rej(error.message)
                })
        })
    }

    static appSignIn(email, password) {
        return new Promise(async(res, rej) => {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    // Signed in
                    const user = userCredential.user
                    AsyncStorage.setItem('user', JSON.stringify(user))
                    AsyncStorage.setItem('auth', JSON.stringify(auth))
                    AsyncStorage.setItem('email', JSON.stringify(user.email))
                    res(user.email)
                })
                .catch(error => {
                    rej(error.message)
                })
        })
    }
    static resetPassword(email) {
        return new Promise((res, rej) => {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    res("Succsess")
                })
                .catch((error) => {
                    rej(error.message)
                });
        })
    }
}


class FireBaseImageHandler {
    static getUrlByName(fileName) {
        return new Promise(async(res, rej) => {
            getDownloadURL(ref(storage, fileName))
                .then(url => {
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
    static uploadImageToFireBase(uri) {
        return new Promise(async(res, rej) => {
            const filename = uri.substring(uri.lastIndexOf('/') + 1).substring(0, 17)
            const storageRef = ref(storage, filename);
            let response = await fetch(uri)
            let blob = await response.blob()
            let snapshot = await uploadBytes(storageRef, blob)
            res(snapshot)
        })
    }
    static deleteImageFromFireBase(fileName) {
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
}






export { FireBaseAuthSystem }
export { FireBaseImageHandler }