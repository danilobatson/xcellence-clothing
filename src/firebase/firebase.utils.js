import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyDvT_8oNZUoqMnipT7grQOl4dBw5WxBAvY',
	authDomain: 'excellence-db.firebaseapp.com',
	projectId: 'excellence-db',
	storageBucket: 'excellence-db.appspot.com',
	messagingSenderId: '775475348170',
	appId: '1:775475348170:web:3b943f2f00aa87e6fbaa33',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();


	if (!snapShot.exists) {
		const { displayName, email, } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (e) {
			console.log('error creating user', e);
		}
	}
  return userRef
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
