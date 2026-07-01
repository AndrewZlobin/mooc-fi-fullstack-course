import {useState} from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

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
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </div>
    )
}

export default App