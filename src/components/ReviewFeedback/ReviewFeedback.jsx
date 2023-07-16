import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";

// Component to review feedback object and send to server/DB
function ReviewFeedback() {
    const history = useHistory();
    // Bring in redux store
    const feedbackReducer = useSelector(store => store.feedbackReducer);

    // Send feedback to server and direct to next page
    const postFeedback = () => {
        axios.post('/feedback', feedbackReducer)
            .then(res => {
                history.push('/submitsuccess');
            }).catch(err => {
                console.log('Error Posting to server', err);
                res.sendStatus(500);
            });
    };

    // DOM
    return (
        <div id="review-container">
            <h2>Review your feedback</h2>
            <h3>Feelings: {feedbackReducer.feeling}</h3>
            <h3>Understanding: {feedbackReducer.understanding}</h3>
            <h3>Support: {feedbackReducer.support}</h3>
            <h3>Comments: {feedbackReducer.comments}</h3>
            <button onClick={postFeedback} type="button" >SUBMIT</button>
        </div>
    )
};

// Export component
export default ReviewFeedback;