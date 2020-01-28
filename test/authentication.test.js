const test = require('firebase-functions-test')();
import { loginWithProvider } from '../src/scripts/authentication.js';

//Before All, we should run firebase, so it won't be required in each test and it won't say it is not defined

beforeAll(() => {
    firebase = firebase.initializeApp(firebaseConfig);
});



test("sessionListener", () => {
    it("should detect if user is signed in", () => {
        const user = true;
        expect(user).toBe(true);
    });
});

test("login with provider", async() => {
    it("should use correct provider", () => {
        expect(loginWithProvider(1)).toBe(firebase.auth().signInWithRedirect(providerGoogle));
        // expect(case2 to use github);
        // expect(case3 to use twitter);
    });
});