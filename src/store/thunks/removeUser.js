import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);
  // The above operation does not return anything
  // In order to remove the user from the UI, we need which user is deleted
  // Hence, we would be required to return the user from this thunk
  // so that it can be accessed in the action.payload property
  return user;
});

export { removeUser };
