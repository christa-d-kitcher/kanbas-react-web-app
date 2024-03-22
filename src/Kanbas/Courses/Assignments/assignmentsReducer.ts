import {assignments} from "../../Database";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    assignments: assignments, //why not have it as: modules.filter((module) => module.course === courseId);
    // assignment: ""{ title: "New Assignment 123", course: "New Assignment course", points: "Out of 100",
    //     dueDate: new Date(), availableFromDate: new Date(), availableUntilDate: new Date()},""
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        // setAssignment: (state, action) => {
        //     state.assignment = action.payload;
        // },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },

    },
});


export const { addAssignment, deleteAssignment, updateAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

