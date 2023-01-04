import React, { useCallback, useState } from 'react'
import ReactDOM from "react-dom/client";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}
const Title = ({ text }) => {
  return <h1>{text}</h1>
}
const MostVoted = ({votes, anecdotes}) => {
  
  const max = Math.max(...votes)
  const index = votes.indexOf(max)
  const mostVoted = anecdotes[index]
  
  return(
    <div>
      <p>{mostVoted}</p>
    </div>
  )
}

const App = ({ anecdotes }) => {
 
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVote] = useState(Array(6).fill(0))


  
  
  const random = useCallback(() =>{
    const arrayIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(arrayIndex)    
  })

  const votation = useCallback(() =>{
    const copyVote = allVotes
    copyVote[selected] += 1
    setAllVote(copyVote)
    console.log(allVotes);
  })
  

  return (
    <div>
      <Title text='Anecdote of the day'/>
      <p>{anecdotes[selected]}</p>
      <Button onClick={random} text='Next Anecdote'/>
      <Button onClick={votation} text='vote'/>
      <Title text='Anecdote with most votes'/>
      <MostVoted votes={allVotes} anecdotes={anecdotes}/>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
)