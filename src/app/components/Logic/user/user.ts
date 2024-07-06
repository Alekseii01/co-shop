import { auth } from '../../../../../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export async function handleUserRegistration(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User registered:', user);
    alert('Registration successful!');
  } catch (error) {
    console.error('Registration error:', error);
    alert('Registration failed. Please try again.');
  }
}

export async function handleUserLogin(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User logged in:', user);
    alert('Logged in successfully!');
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed. Check your email and password.');
  }
}

function handleAuthStateChanged(user: any) {
  if (user) {
    console.log('User is signed in:', user);
    uid = user.uid;
  } else {
    console.log('User is signed out');
    uid = null;
  }
}

export let uid: string | null = null;

onAuthStateChanged(auth, handleAuthStateChanged);