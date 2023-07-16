import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Component to handle support response
function SupportForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [support, setSupport] = useState('');

    // Capture 'support' value
    const handleSupport = (event) => {
        setSupport(event.target.value);
    };

    // Require input between 1-5 and send to Redux store
    const addSupport = () => {
        if (support === '' || support > 5 || support < 1) {
            alert('Must enter a value between 1-5 to continue.')
        } else
            dispatch({
                type: 'ADD_SUPPORT',
                payload: support,
            }),
                history.push('/supportform');
    };

    // DOM
    return (
        <form>
            <h2>How well are you being supported?</h2>
            <input
                onChange={handleSupport}
                type="number"
                placeholder="1-5"
                min="1"
                max="5"
                required
            />
            <button onClick={addSupport} type="button">NEXT</button>
        </form>
    )
};

export default SupportForm;