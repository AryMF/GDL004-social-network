import { mockPosts } from "../data/dataMockPost.js"
import { newPostSelectors } from "../views/newPost.js"

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
        //it should be able to add the data to the firestore
        // let formNew = newPostSelectors.form;
        // dataSource.collection("post").add({
        //     title: formNew.title.value,
        //     about: formNew.about.value
        // })
};



export { profileCreation, fetchData, fetchMockData, newPostCreation }