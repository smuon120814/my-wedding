import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import the store
import type { RootState } from "../store";

// Define a type for the slice state
interface themeState {
  colorTheme: string;
}

// Define the initial state using that type
const initialState: themeState = {
  colorTheme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<string>) => {
      switch (state.colorTheme) {
        case "light":
          state.colorTheme = "dark";
          break;

        case "dark":
          state.colorTheme = "light";
          break;
      }
    },
  },
});

// Actions creators are generated for each case reducer function
export const { switchTheme } = themeSlice.actions;

// You must export the reducer as follows for it to be read by the store
export default themeSlice.reducer;
