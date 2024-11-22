import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Room {
  id: string;
  name: string;
}

interface RoomState {
  rooms: Room[];
}

const initialState: RoomState = {
  rooms: [{ id: 'room1', name: 'Room 1' }],
};

const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom: (state) => {
      const newRoomId = `room${state.rooms.length + 1}`;
      state.rooms.push({ id: newRoomId, name: `Room ${state.rooms.length + 1}` });
    },
  },
});

export const { addRoom } = roomSlice.actions;
export default roomSlice.reducer;
