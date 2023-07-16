import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SubmitSuccess() {
    const history = useHistory();

    const resetFeedback = () => {
        history.push('/feelingform')
    }


    return (
        <>
            <h2>Thank you for your feedback!</h2>
            <button onClick={resetFeedback}>Leave New Feedback</button>
        </>
    )
}

export default SubmitSuccess;