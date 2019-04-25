import * as firebase from 'firebase';
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

//FIREBASE DOES NOT SUPPORT ARRAYS
// database.ref('notes').push({
//   title: 'Get up again',
//   body: 'body text'
// });

// database.ref('notes/-LcRVOcXCz8Uiu5lkGqC').remove();

// database.ref('expenses').push({
//   description: 'New Tv',
//   note: 'some notes about TV',
//   amount: 1999,
//   createdAt: 121212
// });

// database.ref('expenses').push({
//   description: 'Macbook pro',
//   note: 'some notes about macbook pro',
//   amount: 19990,
//   createdAt: 121214
// });

// database.ref('expenses').push({
//   description: 'Les Paul',
//   note: 'some notes about Les paul',
//   amount: 500000,
//   createdAt: 121216
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     // console.log('data is read', snapshot.forEach());
//     console.log(expenses);
//   })
//   .catch(error => {
//     console.log('error is: ', error);
//   });

//value is an event that fires when a value is changed
// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   // console.log('data is read', snapshot.forEach());
//   console.log(expenses);
// });

//child_removed is an event that fires when a data is removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_changed is an event that fires when a data is removed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_added is an event that fires when a data is added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref()
//   .set({
//     name: 'Peter Stema',
//     age: 60,
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//       title: 'Software Developer',
//       company: 'Widget Corp'
//     },
//     location: {
//       city: 'Detroit',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('data is saved');
//   })
//   .catch(error => {
//     console.log('error is: ', error);
//   });

// database.ref('age').set(6);
// database.ref('location/city').set('Hazel Park');

// database
//   .ref('attributes')
//   .set({
//     height: '6 foot',
//     weight: '157lbs'
//   })
//   .then(() => {
//     console.log('data is saved');
//   })
//   .catch(error => {
//     console.log('error is: ', error);
//   });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('removed');
//   })
//   .catch(error => {
//     console.log('error', error);
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('removed');
//   })
//   .catch(error => {
//     console.log('error', error);
//   });

// using a value of null deletes
// database.ref().update({
//   age: 57,
//   isSingle: true,
//   job: null
// });

// using a value of null deletes
//only updates root not nested objects
// nested objects can be updated with the syntax below
//where the ref is a string (if its not wrapped in quotes its not valid javascript)
// database.ref().update({
//   age: 57,
//   isSingle: true,
//   job: 'manager',
//   'location/city': 'Hazel Park'
// });

// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Hazel Park',
//   'job/company': 'ZXY corp'
// });

//fetching data
// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const data = snapshot.val();
//     console.log('Success', data);
//     console.log('Success', data.age);
//   })
//   .catch(error => {
//     console.log('error', error);
//   });

//fetching data that the server will automatically send new data when data is updated
// the callback runs every time the data is updated
// off() turns off the subscription
// database.ref().on('value', snapshot => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });

// setTimeout(() => {
//   database.ref('name').set('Peter Stema');
// }, 3500);
