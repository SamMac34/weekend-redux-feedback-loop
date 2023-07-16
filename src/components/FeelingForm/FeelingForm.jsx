import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Component to handle feeling feedback
function FeelingForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [feeling, setFeeling] = useState('');

    // Capture 'feeling' value
    const handleFeeling = (event) => {
        setFeeling(event.target.value);
    };

    // Require input value between 1-5, send to Redux store, and direct to next page
    const addFeeling = () => {
        if (feeling === '' || feeling > 5 || feeling < 1) {
            alert('Must enter a value between 1-5 to continue.');
        } else
            dispatch({
                type: 'ADD_FEELING',
                payload: feeling,
            }),
                history.push('/understandform');
    };

    // Display on DOM
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
            <button onClick={addFeeling} type="button">NEXT</button>
        </form>
    )
};

// Export component
export default FeelingForm;