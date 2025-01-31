import { useState } from 'react'
import './App.css'
import ReachOutPortion from './components/reachOutPortion/reachOutPortion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReachOutPortion></ReachOutPortion>
    </>
  )
}

export default App
