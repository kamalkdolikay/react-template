import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  greetingMessage: string;
}

const initialState: HomeState = {
  greetingMessage: 'Hello, World!',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setGreetingMessage: (state, action: PayloadAction<string>) => {
      state.greetingMessage = action.payload;
    },
  },
});

export const { setGreetingMessage } = homeSlice.actions;
export default homeSlice.reducer;
