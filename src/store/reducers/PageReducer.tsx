import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TPage = "home" | "about" | "portfolio" | "contacts"

export interface IinitialState {
    page: TPage,
}

const initialState: IinitialState = {
    page: "home",
}

export const sceneSlice = createSlice({
    name: "scene",
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<TPage>) {
            state.page = action.payload
        }
    }
})

export default sceneSlice.reducer