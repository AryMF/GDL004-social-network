import { mockPosts } from "../data/dataMockPost.js"
import { form } from "./controller.js"

//Cloud Firestore
const dataSource = firebase.firestore();
//dataSource.settings ({ timestampsInSnapshots }); //TODO: research this

const profileCreation = (_profileInfo) => {
    console.log("profileCreation");
    console.log("_profileInfo");
    return dataSource.collection("user").doc(_profileInfo.email).set(_profileInfo);
}

//Recuperar info de cloud firestore
const fetchData = (collection, document) => {
    var docRef = dataSource.collection(collection).doc(document);
    return docRef.get();

}

const fetchMockData = () => {
    return mockPosts;
}



const newPostCreation = (title, about) => {
    console.log("New Post Creation")
        // dataSource.collection("post").add({
        //     title: form.title.value,
        //     about: form.title.value
        // })
};



export { profileCreation, fetchData, fetchMockData, newPostCreation }