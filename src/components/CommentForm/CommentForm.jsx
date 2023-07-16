import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Component to handle comment feedback
function CommentForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [comment, setComment] = useState('');

    // Capture 'comment' value
    const handleComment = (event) => {
        setComment(event.target.value);
    };

    // Require input between 1-5 and send to Redux store
    const addComment = () => {
            dispatch({
                type: 'ADD_COMMENT',
                payload: comment,
            }),
                history.push('/reviewfeedback');
    };

    // DOM
    return (
        <form>
            <h2>Would you like to leave any comments?</h2>
            <input
                id="comment-input"
                onChange={handleComment}
                type="text"
            />
            <button onClick={addComment} type="button">NEXT</button>
        </form>
    )
};

export default CommentForm;