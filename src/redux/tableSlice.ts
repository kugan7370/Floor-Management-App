import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Table {
  id: string;
  type: string;
  name: string;
  minCovers: number;
  maxCovers: number;
  online: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

interface TableState {
  tables: Table[];
  selectedTableId: string | null;
}

const initialState: TableState = {
  tables: [],
  selectedTableId: null,
};

const tableSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    addTable: (state, action: PayloadAction<{ type: string }>) => {
      const type = action.payload.type;
      state.tables.push({
        id: uuidv4(),
        type,
        name: `Table ${state.tables.length + 1}`,
        minCovers: 2,
        maxCovers: 4,
        online: true,
        x: 100,
        y: 100,
        width: type === 'type1' ? 100 : 150,
        height: type === 'type1' ? 100 : 150,
        rotation: 0,
      });
    },
    updateTable: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Table> }>
    ) => {
      const { id, updates } = action.payload;
      const table = state.tables.find((t) => t.id === id);
      if (table) {
        Object.assign(table, updates);
      }
    },
    
    deleteTable: (state, action: PayloadAction<string>) => {
      state.tables = state.tables.filter((table) => table.id !== action.payload);
      if (state.selectedTableId === action.payload) {
        state.selectedTableId = null;
      }
    },
    copyTable: (state, action: PayloadAction<string>) => {
      const table = state.tables.find((t) => t.id === action.payload);
      if (table) {
        state.tables.push({
          ...table,
          id: uuidv4(),
          x: table.x + 20,
          y: table.y + 20,
        });
      }
    },
    selectTable: (state, action: PayloadAction<string | null>) => {
      state.selectedTableId = action.payload;
    },

    resetTables: (state) => {
      state.tables = [];
      state.selectedTableId = null
  },
  },
});

export const { addTable, updateTable, deleteTable, copyTable, selectTable,resetTables } =tableSlice.actions;
export default tableSlice.reducer;
