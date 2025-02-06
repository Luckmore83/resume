import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Daniel Akestam',
    skills: [],
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        addSkill: (state, action) => {
            state.skills.push(action.payload);
        },
        removeSkill: (state, action) => {
            state.skills = state.skills.filter((skill, index) =>
            index !== action.payload);
        },
    },
});

export const { setName, addSkill, removeSkill } = resumeSlice.actions;
export default resumeSlice.reducer;