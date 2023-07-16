import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UnderstandForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [understand, setUnderstand] = useState('');

    // Capture 'understand' value
    const handleUnderstand = (event) => {
        setUnderstand(event.target.value);
    };

    // Require input between 1-5 and send to Redux store
    const addUnderstand = () => {
        if (understand === '' || understand > 5 || understand < 1) {
            alert('Must enter a value between 1-5 to continue.')
        } else
            dispatch({
                type: 'ADD_UNDERSTAND',
                payload: understand,
            }),
                history.push('/supportform');
    };

    return (
        <form>
            <h2>How well are you understanding the content?</h2>
            <input
                onChange={handleUnderstand}
                type="number"
                placeholder="1-5"
                min="1"
                max="5"
                required
            />
            <button onClick={addUnderstand} type="button">NEXT</button>
        </form>
    )
};

export default UnderstandForm;