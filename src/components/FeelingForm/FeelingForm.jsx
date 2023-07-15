import React, { useState } from "react";
import { useDispatch } from "react-redux";

function FeelingForm() {
    const dispatch = useDispatch();
    let [feeling, setFeeling] = useState(0);

    const handleFeeling = (event) => {
        console.log('in handleFeeling, e.t.v is:', event.target.value);
        setFeeling(event.target.value)
    };

    const addFeeling = () => {
        console.log('in addFeeling');
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling,
        })
    };

    return (
        <>
        <h2>How are you feeling today?</h2>
        <input onChange={handleFeeling} type="number" placeholder="1-5"></input>
        <button onClick={addFeeling}>NEXT</button>
        </>
    )
}

export default FeelingForm;