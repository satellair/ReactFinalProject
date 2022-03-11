import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  navopen: false,
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === 'light' ?
        state.theme = 'dark' :
        state.theme = 'light'
    },
    toggleNavOpen: (state,action) => {
      state.navopen = action.payload
    }
  }
})

export const { toggleTheme, toggleNavOpen } = generalSlice.actions;

export default generalSlice.reducer;