import { login, logout } from '../../actions/auth';

test('Should generate action login object', () => {
    const uid = 'abc123'; 
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: uid
    })
});

test('Should generate action logout object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});

//npm test -- --watch
