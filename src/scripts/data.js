const profileCreation = (userID, name, email, picture) => {
    let profileInfo = {
        uid: userID,
        user: name,
        userEmail: email,
        profilePicture: picture
    }
    firebase.database().ref("user/" + userID)
        .set(profileInfo);
}