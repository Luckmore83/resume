import { createSlice } from '@reduxjs/toolkit';
// Here I defined my initialState where it will show my name and put in skills with a empty array so that I could do payloads of new ones if I wanted to add them.
const initialState = {
    name: 'Daniel Akestam',
    skills: [],
};
// My reducers in order to manipulate my name, the skill list where I can add new ones, and if I need to remove an added skill.
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