import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ReviewFeedback() {
    const history = useHistory();
    const feedbackReducer = useSelector(store => store.feedbackReducer);

    const postFeedback = () => {
        axios.post( '/feedback', feedbackReducer )
        .then(res => {
            feedbackReducer
            // history.pushState('/submitsuccess');
        }).catch(err => {
            console.log('Error Posting to DB', err);
        });
    }

    return (
        <div>
            <h2>Review your feedback</h2>
            <h3>Feelings: {feedbackReducer.feeling}</h3>
            <h3>Understanding: {feedbackReducer.understanding}</h3>
            <h3>Support: {feedbackReducer.support}</h3>
            <h3>Comments: {feedbackReducer.comments}</h3>
            <button onSubmit={postFeedback} type="submit" >SUBMIT</button>
        </div>
    )
}

export default ReviewFeedback