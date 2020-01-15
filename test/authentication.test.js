import * as emailRegistration from '../authentication.js';
jest.mock('./authentication.js');



test('should store email, user name and password', () => {
    emailRegistration().then(userName => {
        expect(userName).toBe('Mark');
    });
});