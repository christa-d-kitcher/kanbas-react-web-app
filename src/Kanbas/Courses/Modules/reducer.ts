import { modules } from "../../Database";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    modules: modules, //why not have it as: modules.filter((module) => module.course === courseId);
    module: { name: "New Module 123", description: "New Description" },
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module: any) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module: any) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }
            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});


export const { addModule, deleteModule,
    updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;

