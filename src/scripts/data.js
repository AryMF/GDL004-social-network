//Cloud Firestore
const dataSource = firebase.firestore();
//dataSource.settings ({ timestampsInSnapshots }); //TODO: research this

//Registro de datos del usuario  en base de datos
const profileCreation = (name, email, picture) => {
    let profileInfo = {
        displayName: name,
        email: email,
        profilePicture: picture
    }
    dataSource.collection("user").doc(email).set(profileInfo).then(function() {
        console.log("Document successfully written!");
    });
}

//Recuperar info de cloud firestore
const fetchData = (collection, document) => {
    var docRef = dataSource.collection(collection).doc(document);
    return docRef.get();
}