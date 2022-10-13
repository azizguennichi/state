import React , {useState} from 'react';
const Namehook = () => {
    const [name , setname]=useState("mohamed")
    const [age , setage] = useState ("25")
    const changemyname = () => {
        setname("aziz")
    }
    const changemyage = () => {
        setage ("20")
    }
    

    return (
        <div>
            <h1>{name}guennichi</h1>
            <button onClick={changemyname}>change</button>
            <h1>my new name is {name}</h1>
         <h1>my age is {age}</h1>
         <button onClick={changemyage}>correct</button>
         <h1>{setage}</h1>
        </div>
    )
    }
    export default Namehook;