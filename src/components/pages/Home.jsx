import { useDispatch, useSelector } from 'react-redux';
import { setName, addSkill, removeSkill } from '../../store/resumeSlice';
import { useState } from 'react';
// Here's my function to dispatch new skills added to the 'Skills' list.
const Home = () => {
    const dispatch = useDispatch();
    const skills = useSelector((state) =>
    state.resume.skills);
    const [newSkill, setNewSkill] = useState('');
    const { name } = useSelector((state) => state.resume);
    const handleAddSkill = () => {
        if (newSkill.trim()) {
            dispatch(addSkill(newSkill));
            setNewSkill('');
        }
    };
// If I made a mistake with an added skill or just want to remove a skill I just added.
    const handleRemoveSkill = (index) => {
        dispatch(removeSkill(index));
    };

    return (
        <section>
           <h1>Reactified Resume</h1>
           <article>
            <h2>{name}</h2>
            <button onClick={() =>
                dispatch(setName('Adam Alsing lookalike'))}>Push the red button?</button>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                   <li key={index}>{skill}</li>     
                ))}
                {skills.map((skill, index) => (
                    <li key={index}>
                        {skill} <button onClick={() =>
                             handleRemoveSkill(index)} className="remove">X</button>
                    </li>
                ))}
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Tailwind</li>
                <li>SASS</li>
            </ul>
            <input type="text" className="input" value={newSkill} onChange={(e) =>
                setNewSkill(e.target.value)} placeholder='Enter a skill'/>
           </article>
           <button onClick={handleAddSkill} className="skill">Add</button>
        </section> 
    );
}

export default Home;