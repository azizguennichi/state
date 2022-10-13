import React , {useState} from 'react';
const Biohook = () => {
    const [bio , setbio]= useState ();
    const changemybio = () => {
        setbio('my name is mohamed aziz guennichi and i love informatique and my favorite sport is BOXING')
    }
    return (
        <div>
            <h1>{setbio}</h1>
            <button onClick={changemybio}>ITS ME</button>
            <h1>{bio}</h1>
        </div>
    )
}
export default Biohook