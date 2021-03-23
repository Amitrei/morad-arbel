import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "globals",
  initialState: {
    burgerMenu: false,
    blackOverlay: false,
    roomDetails: {
      show: false,
      room: null,
    },
  },
  reducers: {
    loadedRoomDetails: (state, action) => {
      state.roomDetails.room = action.payload;
    },

    clearedRoomDetails: (state, action) => {
      state.roomDetails.room = null;
    },

    toggledRoom: (state, action) => {
      state.roomDetails.show = !state.roomDetails.show;
    },

    blackOverlayRendered: (state, action) => {
      state.blackOverlay = true;
    },

    blackOverlayUnrendered: (state, action) => {
      state.blackOverlay = false;
    },

    toggledBurgerMenu: (state, action) => {
      state.burgerMenu = !state.burgerMenu;
    },
  },
});

// Action Creators

export const blackOverlayOn = () => (dispatch, getState) => {
  return dispatch(blackOverlayRendered());
};

export const blackOverlayOff = () => (dispatch, getState) => {
  return dispatch(blackOverlayUnrendered());
};

export const toggleRoom = () => (dispatch, getState) => {
  dispatch(toggledRoom());
  return getState().roomDetails.show
    ? dispatch(blackOverlayRendered())
    : dispatch(blackOverlayUnrendered());
};

export const toggleBurgerMenu = () => (dispatch, getState) => {
  return dispatch(toggledBurgerMenu());
};

export const {
  blackOverlayRendered,
  blackOverlayUnrendered,
  loadedRoomDetails,
  toggledRoom,
  toggledBurgerMenu,
  clearedRoomDetails,
} = slice.actions;
export default slice.reducer;
