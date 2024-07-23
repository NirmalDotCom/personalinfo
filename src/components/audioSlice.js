// audioSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const audioSlice = createSlice({
  name: 'audio',
  initialState: {
    isPlaying: false,
  },
  reducers: {
    playAudio: state => {
      state.isPlaying = true;
    },
    stopAudio: state => {
      state.isPlaying = false;
    },
  },
});

export const { playAudio, stopAudio } = audioSlice.actions;

export const selectIsPlaying = state => state.audio.isPlaying;

export default audioSlice.reducer;
