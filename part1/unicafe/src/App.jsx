import {useState} from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
    const totalFeedbacks = () => good + neutral + bad;
    const hasAnyFeedback = () => totalFeedbacks() > 0;
    const averageFeedbacks = () => {
        if (!hasAnyFeedback()) {
            return 0;
        }

        return ((good * 1) + (neutral * 0 ) + (bad * -1)) / totalFeedbacks();
    };
    const positivePercentageFeedbacks = () => {
        if (hasAnyFeedback()) {
            return 0;
        }

        return good / totalFeedbacks() * 100;
    }

    if (!hasAnyFeedback()) {
        return (<div><span>No feedback given</span></div>)
    }

    return (
        <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {totalFeedbacks()}</p>
            <p>average {averageFeedbacks()}</p>
            <p>positive {positivePercentageFeedbacks()} %</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const increaseGoodFeedback = () => setGood(good + 1);
    const increaseNeutralFeedback = () => setNeutral(neutral + 1);
    const increaseBadFeedback = () => setBad(bad + 1);

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={increaseGoodFeedback} text={'good'}/>
            <Button onClick={increaseNeutralFeedback} text={'neutral'}/>
            <Button onClick={increaseBadFeedback} text={'bad'}/>

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App