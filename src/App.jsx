import { useState } from 'react'

const Button = ({handleClick, name}) => {
    return (
        <button onClick={handleClick}>{name}</button>
    )
}

const Stats = ({good, neutral, bad}) => {
    const totalRatings = good + neutral + bad
    if (totalRatings === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    const average = (good - bad) / totalRatings
    const positiveRatingPercentage = (good / totalRatings) * 100
    return (
        <table>
            <StatisticLine text={"good"} value={good}/>
            <StatisticLine text={"neutral"} value={neutral}/>
            <StatisticLine text={"bad"} value={bad}/>
            <StatisticLine text={"all"} value={totalRatings}/>
            <tr>
                <td>average</td>
                <td>{average.toFixed(1)}</td>
            </tr>
            <tr>
                <td>positive</td>
                <td>{positiveRatingPercentage.toFixed(1)} %</td>
            </tr>
        </table>
    )
}

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const App = () => {
    const [ratings, setRatings] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })

    const handleGoodRating = () => {
        console.log("before", ratings.good)
        const newGoodRating = {
            ...ratings,
            good: ratings.good + 1
        }
        console.log("after", ratings.good)
        setRatings(newGoodRating)
    }

    const handleNeutralRating = () => {
        const newNeutralRating = {
            ...ratings,
            neutral: ratings.neutral + 1
        }
        setRatings(newNeutralRating)
    }

    const handleBadRating = () => {
        const newBadRating = {
            ...ratings,
            bad: ratings.bad + 1
        }
        setRatings(newBadRating)
    }

    return(
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodRating} name={"good"}/>
            <Button handleClick={handleNeutralRating} name={"neutral"}/>
            <Button handleClick={handleBadRating} name={"bad"}/>
            <h1>statistics</h1>
            <Stats good={ratings.good} neutral={ratings.neutral} bad={ratings.bad}/>
        </div>
    )
}

export default App
