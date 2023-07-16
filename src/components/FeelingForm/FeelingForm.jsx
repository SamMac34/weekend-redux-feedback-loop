import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FeelingForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [feeling, setFeeling] = useState('');

    // Capture 'feeling' value
    const handleFeeling = (event) => {
        setFeeling(event.target.value)
    };

    // Require input between 1-5 and send to Redux store
    const addFeeling = () => {
        if (feeling === '' || feeling > 5 || feeling < 1) {
            alert('Must enter a value between 1-5 to continue.')
        } else
            dispatch({
                type: 'ADD_FEELING',
                payload: feeling,
            }),
                history.push('/understandform');
    };

    return (
        <form>
            <h2>How are you feeling today?</h2>
            <input
                onChange={handleFeeling}
                type="number"
                placeholder="1-5"
                min="1"
                max="5"
                required
            />
            <button onClick={addFeeling} type="submit">NEXT</button>
        </form>
    )
}

export default FeelingForm;