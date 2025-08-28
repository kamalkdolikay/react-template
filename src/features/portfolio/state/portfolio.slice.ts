import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PortfolioState {
  greetingMessage: string;
}

const initialState: PortfolioState = {
  greetingMessage: 'Portfolio',
};

const porfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setGreetingMessage(state, action: PayloadAction<string>) {
      state.greetingMessage = action.payload;
    },
  },
});

export const { setGreetingMessage } = porfolioSlice.actions;
export default porfolioSlice.reducer;
