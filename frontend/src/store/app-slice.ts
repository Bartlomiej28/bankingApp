import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definicja typu dla stanu początkowego
interface showBuyDepositWindow {
    showBuyDepositWindow: boolean;
    showCreateNewCardWindow: boolean;
    showSidebar: boolean;
    depositPercent: number;
    depositMonths: number;
}

interface setDepositData{
    depositPercent: number;
    depositMonths: number;
}


const initialState: showBuyDepositWindow = {
    showBuyDepositWindow: false,
    showCreateNewCardWindow: false,
    showSidebar: false,
    depositPercent: 0,
    depositMonths: 0,

};

const appSlice = createSlice({
    name: 'appData',
    initialState,
    reducers: {
        setShowBuyDepositWindow(state) {
            state.showBuyDepositWindow = !state.showBuyDepositWindow;
        },
        setShowCreateNewCardWindow(state){
            state.showCreateNewCardWindow = !state.showCreateNewCardWindow;
        },
        setShowSidebar(state){
            state.showSidebar = !state.showSidebar;
        },
        setDepositData(state, action: PayloadAction<setDepositData>){
            const { depositPercent, depositMonths } = action.payload;
            state.depositPercent = depositPercent
            state.depositMonths = depositMonths
        }
    }
});

export const appActions = appSlice.actions;
export default appSlice;