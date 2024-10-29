import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface initialStateTypes{
    isSidebarCollapsed: boolean; // A sidebar ta aberta ou fechada (true, false)
    isDarkMode: boolean; // O modo dark ta ligado ou desligado (true, false)
}

const initialState: initialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({    
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload
        },
    }
});

export const { setIsDarkMode,  setIsSidebarCollapsed} = globalSlice.actions;
export default globalSlice.reducer;