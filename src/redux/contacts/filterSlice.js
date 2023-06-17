import { createSlice } from '@reduxjs/toolkit';


const initialFilterState = '';

const filterSlice = createSlice ({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setFilter(_, action) {
        return action.payload;
},
}
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;