import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const initialState = {};

const tbl = collection(db, 'user');

const formslice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    Addsignup: (state, action) => {
      try {
        createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password);
        addDoc(tbl, {
          email: action.payload.email,
          password: action.payload.email,
        });
      } catch (error) {
        console.log(error);
      }
    },
    Addlogin: (state, action) => {
      try {
        signInWithEmailAndPassword(auth, action.payload.email, action.payload.password);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { Addlogin, Addsignup } = formslice.actions;
export default formslice.reducer;
