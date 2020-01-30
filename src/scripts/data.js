import { mockPosts } from "../data/dataMockPost.js"
import { newPostSelectors } from "../views/newPost.js"

//Cloud Firestore
const dataSource = firebase.firestore();
//dataSource.settings ({ timestampsInSnapshots }); //TODO: research this

//Storage
const storage = firebase.storage();

//Recuperar info de cloud firestore
const getDocumentData = (_collection, _document) => {
    let docRef = dataSource.collection(_collection).doc(_document);
    return docRef.get();
}

const getCollectionData = (_collection) => {
    let collectionRef = dataSource.collection(_collection).orderBy("creationDate", "desc");
    return collectionRef.get();
}

const getCollectionDataWithCondition = (_collection, field, value) => {
    let collectionRef = dataSource.collection(_collection).where(field, '==', value);//.orderBy("creationDate", "desc");
    return collectionRef.get();
}

const fetchMockData = () => {
    return mockPosts;
}


// Crear entrada
const setDataInDB = (_collection, document, _profileInfo) => {
    return dataSource.collection(_collection).doc(document).set(_profileInfo);
}

const addDataInDB = (_collection,  _info) => {
    // Add a new document with a generated id.
    _info["creationDate"] = firebase.firestore.FieldValue.serverTimestamp();
    return dataSource.collection(_collection).add(_info);
}

//Alamacenar archivo en storage
const fileUpload = (opcion, file) => {
    let collection;
    opcion === "profile" ? collection = "avatar/" : collection = "post/";
    let storageRef = storage.ref(collection + localStorage.getItem("email") + "_" + file.name);
    let uploadTask = storageRef.put(file);

    // Listen for state changes, errors, and completion of the upload.
    return new Promise((resolve, reject) => {
        uploadTask.on("state_changed", // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                /*var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }*/
            },
            function(error) {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                console.error(error);
                reject(error);
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            function() {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    resolve(downloadURL);
                });
            });
    });
}

export { setDataInDB, getDocumentData, fetchMockData, fileUpload, addDataInDB, getCollectionData, 
    getCollectionDataWithCondition }