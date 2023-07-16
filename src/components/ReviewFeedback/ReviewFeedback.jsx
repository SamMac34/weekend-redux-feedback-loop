import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ReviewFeedback() {

    const responseReducer = useSelector(store => store.responseReducer);

    const postFeedback = () => {
        axios.post( '/feedback', responseReducer )
        .then(res => {
            responseReducer
            // history.pushState('/thankyou');
        }).catch(err => {
            console.log('Error Posting to DB', error);
        });
    }

    return (
        <div>
            <h2>Review your feedback</h2>
            <h3>Feelings: {responseReducer.feeling}</h3>
            <h3>Understanding: {responseReducer.understanding}</h3>
            <h3>Support: {responseReducer.support}</h3>
            <h3>Comments: {responseReducer.comments}</h3>
            <button onSubmit={postFeedback} type="submit" >SUBMIT</button>
        </div>
    )
}

export default ReviewFeedback