import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => {
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Statistic = ({ text, statistic }) =>{
  return(
    <p>{`${text} ${statistic}`}</p>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood = useCallback(() =>{
    setGood(
      good+1
    )
  },[good])
  const handleNeutral = useCallback(() =>{
    setNeutral(
      neutral+1
    )
  },[neutral])
  const handleBad = useCallback(() =>{
    setBad(
      bad+1
    )
  },[bad])

  const all = (good + neutral + bad)
  const average = ((good + (bad * -1))/ all)
  const positive = `${good * 100 / all} %`

  

  return (
    <div>
      <Title text='give feedback'/>
      <Button onClick={handleGood} text={'good'}/>
      <Button onClick={handleNeutral} text={'neutral'}/>
      <Button onClick={handleBad} text={'bad'}/>
      <Title text='statistics'/>
      {all == 0 ?
      (
        <p>No feedback given</p>
      ):(
        <table>
          <tbody>
            <tr><td><Statistic text='good' statistic={good}/></td></tr>
            <tr><td><Statistic text='neutral' statistic={neutral}/></td></tr>
            <tr><td><Statistic text='bad' statistic={bad}/></td></tr>
            <tr><td><Statistic text='all' statistic={all}/></td></tr>
            <tr><td><Statistic text='average' statistic={average}/></td></tr>
            <tr><td><Statistic text='positive' statistic={positive}/></td></tr>
          </tbody>
        </table>
      )
      }
        
      
      
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)