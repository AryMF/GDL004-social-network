//Cloud Firestore
const dataSource = firebase.firestore();
//dataSource.settings ({ timestampsInSnapshots }); //TODO: research this

const profileCreation = (_profileInfo) => {
    console.log("profileCreation");
    console.log("_profileInfo");
    dataSource.collection("user").doc(_profileInfo.email).set(_profileInfo).then(function() {
        console.log("Document successfully written!");
    });
}

//Recuperar info de cloud firestore
const fetchData = (collection, document) => {
    var docRef = dataSource.collection(collection).doc(document);
    return docRef.get();
    
}