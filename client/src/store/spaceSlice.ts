import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SpaceSliceData = {
  permissionFulfilled: boolean;
  permissionModalVisible: boolean;
};

const initialState: SpaceSliceData = {
  permissionFulfilled: false,
  permissionModalVisible: false,
};

const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
    togglePermissionModal: state => {
      state.permissionModalVisible = !state.permissionModalVisible;
    },
    setPermission: (state, { payload }: { payload: boolean }) => {
      state.permissionFulfilled = payload;
    },
  },
  //   extraReducers: () => {},
});

export const { togglePermissionModal, setPermission } = spaceSlice.actions;

export default spaceSlice.reducer;
