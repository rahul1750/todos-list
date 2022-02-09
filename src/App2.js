import './App.css';
import React, { useReducer } from 'react';

/* function SecretComponents(){
    return <h1>Super Secret informations for authorized users only</h1>;
}

function RegularComponents(){
    return <h1> Everyone can see this Component </h1>;
}
*/

function App2() {
    const [checked, toggle]  = useReducer(
        (checked) => !checked, 
        false
    ); 
    
    return(
        <>
            <input
            type="checkbox"
            value={checked} 
            onChange={toggle}
            />
            <p>
                {checked? "checked" : "not checked"}
            </p>
        </>
    )
   /* const [emotion, setEmotion]  = useState("happy");
    const [secondary, setSecondary]  = useState("tired");
   
    useEffect(() => {
        console.log(`It's ${emotion} around here!`)
    }, [emotion]);

    useEffect(() => {
        console.log(`It's ${secondary} around here!`)
    }, [emotion]);
    return(
       <>
        <h1>Current emotion is {emotion} and {secondary}.</h1>
        <button onClick={() => setEmotion("Frustrated")}>Frustrate</button>
        <button onClick={() => setSecondary("Cozy")}>Confortable</button>
        <button onClick={() => setEmotion("happy")}>Happy</button>
        <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
       </>
        // <> {props.authorized ? <SecretComponents /> : <RegularComponents />}</>
    )*/
    }
export default App2;
