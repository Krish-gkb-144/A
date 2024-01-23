import { createSlice } from '@reduxjs/toolkit';
import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { act } from 'react-dom/test-utils';

const initialState = {
  userId: {},
  record: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: async (state, action) => {
      const allrecord = collection(db, 'user');
      const updateTimestamp = await setDoc(allrecord, {
        timestamp: new Date()
      });
      updateTimestamp();

      // const tbl = collection(db, 'user', `${state.userId.uid}`, "data");
      // const data = { name: action.payload.name, email: action.payload.email, password: action.payload.password }
      // await addDoc(tbl, [data]);
      // state.record.push(...state.record, action.payload);
      // console.log(state.record);

      // state.record = record;
    },
    setUser: (state, action) => {
      state.userId = action.payload
    },
    setUserId: (state, action) => {
      // const tbl = collection(db, 'user', action.payload, 'data');
      // const record = getDocs(tbl).map((doc) => ({ ...doc.data(), id: doc.id }));

      // state.record = record;

      // console.log(record);
    },

  },
});
export const { addTodo, setUser, setUserId } = todoSlice.actions;
export default todoSlice.reducer;
