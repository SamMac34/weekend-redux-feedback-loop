import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

// Component confirms submission and returns to FeelingForm page
function SubmitSuccess() {
    const history = useHistory();
    const dispatch = useDispatch();

    // Clear redux state and return to FeelingForm
    const resetFeedback = () => {
        dispatch({
            type: 'RESET_FEEDBACK'
        }),
            history.push('/feelingform')
    };

    // DOM
    return (
        <div id="submit-success-container">
            <h2>Thank you for your feedback!</h2>
            <button onClick={resetFeedback}>Leave New Feedback</button>
        </div>
    )
};

// Export component
export default SubmitSuccess;