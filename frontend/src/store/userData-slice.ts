import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDataState {
    id: string;
    amount: number;
    thumbnail: string;
    name: string;
    surename: string;
    email: string;
    ssnpesel: string
}

const initialState: UserDataState = {
    id: '',
    amount: 0,
    thumbnail: '',
    name: '',
    surename: '',
    email: '',
    ssnpesel: ''
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setDataUser(state, action: PayloadAction<UserDataState>) {
            const data = action.payload;
            state.id = data.id;
            state.amount = data.amount;
            state.thumbnail = data.thumbnail;
            state.name = data.name;
            state.surename = data.surename;
            state.email = data.email;
            state.ssnpesel = data.ssnpesel;
        },
        setNewAmount(state, action: PayloadAction<number>) {
            state.amount -= action.payload;
        }
    }
});

export const userDataActions = userDataSlice.actions;
export default userDataSlice;